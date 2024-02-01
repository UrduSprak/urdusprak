let imagesDict = {
    "../media/pages/describe_it/0.png": ["اک آدمی نے لال ٹوپی پہنی ہوئی ہے۔",
                                      "اس نے چشما پہنا ہے۔",
                                      "وہ ایک شیشے کے دروازے کے سامنے کھڑا ہے۔"
                                      ],
    "../media/pages/describe_it/1.png": ["سات بچے کھیل رہے ہیں۔",
                                      "بچہ پتنگ اڑا رہا ہے۔",
                                      "لڑکے نے ایک تلوار پکڑی ہوئی ہے۔",
                                      "کھیل کے میدان میں سلائیڈ ہیں۔"
                                      ],
    "../media/pages/describe_it/2.png": ["سورج چمک رہا ہے۔",
                                      "پودں کا گملا باغ میں ہے۔",
                                      "آسمان میں بادل ہیں۔",
                                      "باغ میں ایک پانی کا نل ہے۔"
                                      ],
    "../media/pages/describe_it/3.png": ["لڑکی اپنے کتے کے ساتھ چل رہی ہے۔",
                                      "لڑکی کے ہاتھ میں بیگ اور موبائل ہے۔",
                                      "باغ میں دو درخت ہیں۔",
                                      "کتے کا رنگ بھورا ہے۔"
                                      ],
};

let resetButton;
let selectedImage;
let correctSentencesKeys;
let sentences;
let sentenceButtons = [];
let correctCount = 0;
let wrongs = [];
let n = 7;
let correctClickCount = 0;
let wrongClickCount = 0;

// Calculate button positions and sizes
let buttonHeight = 70;
let buttonMargin = 20;
let buttonY = 50;
let scale = 150;


textSizeValue = 25;
  
function preload() {
    // Preload all images
    for (let key in imagesDict) {
      imagesDict[key].img = loadImage(key); // Assuming the keys are paths to the images
    }
    
}
  
function setup() {
    textFont('Rocher');
    join_rectW = 500;
    join_rectH = 100;
    canvasHeight = document.getElementById('describe_it').offsetHeight - 10;
    join_rectX = windowWidth / 2 - join_rectW / 2;
    join_rectY = canvasHeight * 0.7;
    let cnv = createCanvas(windowWidth, canvasHeight);
    cnv.parent('describe_it'); // Assign the canvas to the container
    cnv.style('width', '100%');
    cnv.style('height', '100%');

    selectNSentencesAndImage(imagesDict, n);

    // Initialize the reset button
    resetButton = {
        x: 30,
        y: height - 90, // Centered between the correct and wrong counters
        width: 150,
        height: 70,
        color: '#1CB0F6',
        hoverColor: '#1CB0F6',
        pressColor: '#1899D6',
        isHovered: false,
        isPressed: false
    };
}
  
function selectNSentencesAndImage(imagesDict, n) {
    // Get a list of all image keys and randomly select one
    let keys = Object.keys(imagesDict);
    let totalImages = keys.length;
    let randomSelectedImageIndex = floor(random(totalImages));
    let selectedKey = keys[randomSelectedImageIndex];
    selectedImage = imagesDict[selectedKey];

    // Create an array with indices representing each sentence of the selected image
    correctSentencesKeys = selectedImage.map((_, index) => index);

    // Create a pool of all sentences from other images
    let otherSentences = [];
    keys.forEach(key => {
        if (key !== selectedKey) {
            otherSentences = otherSentences.concat(imagesDict[key]);
        }
    });

    // Shuffle the pool of other sentences
    otherSentences = shuffle(otherSentences);

    // Take enough sentences from the other pool to fill up to n sentences
    let additionalSentences = otherSentences.slice(0, n - selectedImage.length);

    // Combine the correct sentences with the additional incorrect sentences
    let combinedSentences = selectedImage.concat(additionalSentences);

    // Shuffle the combined array so that correct and incorrect sentences are mixed
    sentences = shuffle(combinedSentences);

    // Create buttons for each sentence
    createSentenceButtons(sentences, selectedKey);
}


  
// Update your existing createSentenceButtons function with this version
function createSentenceButtons(sentences, correctKey) {
    sentenceButtons = sentences.map((sentence, index) => {
        let isCorrect = imagesDict[correctKey].includes(sentence);
        return {
            x: 1.5 * scale,
            y: buttonY + index * (buttonHeight + buttonMargin),
            width: (width / 2) - 2 * scale,
            height: buttonHeight,
            text: sentence,
            correct: isCorrect,
            clicked: false, // New property to track if the button has been clicked
            wrong: false // Tracks if a wrong option was clicked
        };
    });
}
  
function draw() {
    background(255);
  
    // Calculate the new image dimensions
    let scale = 0.8; // Change this value to scale the image size
    let imgAspectRatio = selectedImage.img.width / selectedImage.img.height;
    let drawWidth = (width / 2) * scale; // Half the width of the canvas, scaled
    let drawHeight = drawWidth / imgAspectRatio; // Calculate the height based on the aspect ratio

    // Check if the scaled height exceeds the canvas height, adjust if necessary
    if (drawHeight > height * scale) {
        drawHeight = height * scale;
        drawWidth = drawHeight * imgAspectRatio;
    }

    fill('#c2efff')
    noStroke()
    rect((width / 2), 0, width/2, height, 0);

    // Draw the image centered in the right half of the canvas
    let imgX = width / 2 + (width / 2 - drawWidth) / 2;
    image(selectedImage.img, imgX, (height - drawHeight) / 2, drawWidth, drawHeight);


    // Draw sentence buttons on the left
    fill('#c2e0ff')
    noStroke()
    rect(0, 0, width/2, height, 0);
    drawSentenceButtons();

    // Draw the correct and wrong click count rectangles on the left side
    drawClickCounters();

    // Draw the reset button
    drawResetButton();
}


function drawClickCounters() {
    // Draw the correct clicks rectangle at the top
    fill('#7fbab7');
    stroke(0);
    strokeWeight(2);
    rect(30, buttonY, 100, buttonHeight, 5);
    fill(0);
    noStroke();
    textSize(50);
    textAlign(CENTER, CENTER);
    text(correctClickCount, 75, buttonY + 40);

    // Draw the wrong clicks rectangle at the bottom
    fill('#ee7569');
    stroke(0);
    strokeWeight(2);
    rect(30, buttonY + 100, 100, buttonHeight, 5);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(wrongClickCount, 75, buttonY + 140);
}

function createSentenceButtons(sentences, correctKey) {
    sentenceButtons = sentences.map((sentence, index) => {
        let isCorrect = imagesDict[correctKey].includes(sentence);
        return {
            x: 1.5 * scale,
            y: buttonY + index * (buttonHeight + buttonMargin),
            width: (width / 2) - 2 * scale,
            height: buttonHeight,
            text: sentence,
            correct: isCorrect,
            clicked: false,
            wrong: false,
            isVisible: true // New property to track visibility
        };
    });
}


function drawSentenceButtons() {
    sentenceButtons.forEach(button => {
        // Check if the button is visible
        if (!button.isVisible) {
            fill('#e6e7e8'); // Default color
            stroke(0);
            strokeWeight(2);
            rect(button.x, button.y, button.width, button.height, 5);
            return; // Skip drawing this button
        }

        // Check if the button was clicked and is correct
        if (button.correct && button.clicked) {
            // console.log("Current time: " + millis() + " Clicked time: " + button.clickedTime); // Debugging line
            if (millis() - button.clickedTime < 1000) {
                fill('#7fbab7'); // Green color for correct click
            } else {
                // Hide the button after 1 second of being clicked
                button.isVisible = false;
            }
        } else if (button.wrong) {
            fill('#ee7569'); // Red color for wrong click
        } else {
            fill('#e6e7e8'); // Default color
        }

        // Draw the button if it's visible
        if (button.isVisible) {
            stroke(0);
            strokeWeight(2);
            rect(button.x, button.y, button.width, button.height, 5);

            // Only draw text if the button hasn't been clicked or time is up
            if (!button.clicked || millis() - button.clickedTime >= 1000) {
                fill(0); // Black color for text
                noStroke();
                textSize(20);
                textAlign(CENTER, CENTER);
                text(button.text, button.x + button.width / 2, button.y + button.height / 2);
            }
        }
    });
}



function mousePressed() {
    // Check if a sentence button is clicked
    for (let i = 0; i < sentenceButtons.length; i++) {
      let button = sentenceButtons[i];
      if (mouseX > button.x && mouseX < button.x + button.width &&
          mouseY > button.y && mouseY < button.y + button.height) {
        handleSentenceClick(i);
        break;
      }
    }

    // Check if the reset button is clicked
    if (mouseX > resetButton.x && mouseX < resetButton.x + resetButton.width &&
        mouseY > resetButton.y && mouseY < resetButton.y + resetButton.height) {
        handleResetButtonClick();
    }


    if (resetButton.isHovered) {
        resetButton.isPressed = true;
      }
}


function mouseReleased() {
    // Reset the button state when the mouse is released
    resetButton.isPressed = false;
}
  

function handleSentenceClick(index) {
    let clickedButton = sentenceButtons[index];
    if (clickedButton.correct) {
        correctCount++;
        correctClickCount++; // Increment correct clicks
        clickedButton.clicked = true;
        // Record the current time when the button is clicked
        clickedButton.clickedTime = millis();
    } else {
        wrongClickCount++; // Increment wrong clicks
        clickedButton.wrong = true;
        setTimeout(() => {
            clickedButton.wrong = false;
            drawSentenceButtons(); // Redraw buttons to clear the red color
        }, 1000);
    }

    // Check for game completion
    // console.log(correctCount, correctSentencesKeys.length)
    if (correctCount === correctSentencesKeys.length) {
        resetGame();
    }
}


function handleResetButtonClick() {
    // Reset the game by calling resetGame and reset the counters
    correctClickCount = 0;
    wrongClickCount = 0;
    resetGame();
}


function drawResetButton() {
    let buttonColor = resetButton.isPressed ? resetButton.pressColor : 
                      resetButton.isHovered ? resetButton.hoverColor : 
                      resetButton.color;
    fill(buttonColor);
    noStroke();
    strokeWeight(2);
    let yOffset = resetButton.isHovered && !resetButton.isPressed ? -3 : 0; // Move up when hovered
    rect(resetButton.x, resetButton.y + yOffset, resetButton.width, resetButton.height, 20);
    
    fill('#FFF');
    noStroke();
    textSize(textSizeValue);
    text("Reset", resetButton.x + resetButton.width / 2, resetButton.y + yOffset + resetButton.height / 2);
}

function mouseMoved() {
    // Check if the mouse is over the reset button
    resetButton.isHovered = mouseX > resetButton.x && 
                            mouseX < (resetButton.x + resetButton.width) &&
                            mouseY > resetButton.y && 
                            mouseY < (resetButton.y + resetButton.height);
}



// Add the new resetGame function to reset the game
function resetGame() {
    correctCount = 0;
    wrongs = [];
    selectNSentencesAndImage(imagesDict, n);
}
  