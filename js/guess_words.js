let URDU_ALPHABETS = {
    "آ": "آ", "ا": "ا", "ب": "ب", "ﺒ": "ﺒ", "پ": "پ", "ﭙ": "ﭙ", "ت": "ت",
    "ﺘ": "ﺘ", "ٹ": "ٹ", "ﭩ": "ﭩ", "ث": "ث", "ﺜ": "ﺜ", "ج": "ج", "ﺟ": "ﺟ",
    "چ": "چ", "ﭼ": "ﭼ", "ح": "ح", "ﺣ": "ﺣ", "خ": "خ", "ﺧ": "ﺧ", "د": "د",
    "ڈ": "ڈ", "ذ": "ذ", "ر": "ر", "ڑ": "ڑ", "ز": "ز", "ژ": "ژ", "س": "س",
    "ﺴ": "ﺴ", "ش": "ش", "ﺸ": "ﺸ", "ص": "ص", "ﺼ": "ﺼ", "ض": "ض", "ﻀ": "ﻀ",
    "ﻄ": "ﻄ", "ﻈ": "ﻈ", "ع": "ع", "ﻋ": "ﻋ", "ﻌ": "ﻌ", "غ": "غ", "ﻏ": "ﻏ",
    "ﻐ": "ﻐ", "ف": "ف", "ﻓ": "ﻓ", "ق": "ق", "ﻗ": "ﻗ", "ک": "ک", "ﻜ": "ﻜ",
    "گ": "گ", "ﮔ": "ﮔ", "ل": "ل", "ﻠ": "ﻠ", "م": "م", "ﻤ": "ﻤ", "ن": "ن",
    "ں": "ں", "ﻨ": "ﻨ", "و": "و", "ؤ": "ؤ", "ہ": "ہ", "ھ": "ھ", "ہـ": "ہـ",
    "ء": "ء", "ی": "ی", "ئ": "ئ", "ے": "ے", "ﯿ": "ﯿ", "ـہ": "ـہ"
}

let words = {
    "آؤ": ["آ", "ؤ"], "آب": ["آ", "ب"], "آج": ["آ", "ج"], "آم": ["آ", "م"], "آن": ["آ", "ن"],
    "بل": ["ﺒ", "ل"], "بو": ["ﺒ", "و"], "تب": ["ﺘ", "ب"], "تر": ["ﺘ", "ر"], "جب": ["ﺟ", "ب"],
    "خط": ["ﺧ", "ﻄ"], "لو": ["ﻠ", "و"], "پر": ["ﭙ", "ر"], "کم": ["ﻜ", "م"],

    // Three Letter Words
    "آئی": ["آ", "ئ", "ی"], "آئے": ["آ", "ئ", "ے"], "بہت": ["ﺒ", "ہـ", "ت"], "بہن": ["ﺒ", "ہـ", "ن"],
    "بیس": ["ﺒ", "ﯿ", "س"], "تیل": ["ﺘ", "ﯿ", "ل"], "صحت": ["ﺼ", "ﺣ", "ت"], "لاؤ": ["ﻠ", "ا", "ؤ"],
    "مور": ["ﻤ", "و", "ر"], "مُہر": ["ﻤ", "ہـ", "ر"], "ناؤ": ["ﻨ", "ا", "ؤ"], "نوٹ": ["ﻨ", "و", "ٹ"],
    "چیل": ["ﭼ", "ﯿ", "ل"], "یہی": ["ﯿ", "ہـ", "ی"],

    // Four Letter Words
    "باجے": ["ﺒ", "ا", "ﺟ", "ے"], "بادل": ["ﺒ", "ا", "د", "ل"], "بستہ": ["ﺒ", "ﺴ", "ﺘ", "ـہ"],
    "بوئی": ["ﺒ", "و", "ئ", "ی"], "بوئے": ["ﺒ", "و", "ئ", "ے"], "بوری": ["ﺒ", "و", "ر", "ی"],
    "تالے": ["ﺘ", "ا", "ﻠ", "ے"], "جائی": ["ﺟ", "ا", "ئ", "ی"], "دودھ": ["د", "و", "د", "ھ"],
    "رائے": ["ر", "ا", "ئ", "ے"], "روئے": ["ر", "و", "ئ", "ے"], "سائے": ["ﺴ", "ا", "ئ", "ے"],
    "سوئی": ["ﺴ", "و", "ئ", "ی"], "سوئے": ["ﺴ", "و", "ئ", "ے"], "طوطا": ["ﻄ", "و", "ﻄ", "ا"],
    "لائی": ["ﻠ", "ا", "ئ", "ی"], "لائے": ["ل", "ا", "ئ", "ے"], "محلہ": ["ﻤ", "ﺣ", "ﻠ", "ـہ"],
    "نہیں": ["ﻨ", "ہـ", "ﯿ", "ں"], "پانی": ["ﭙ", "ا", "ﻨ", "ی"], "پھول": ["ﭙ", "ھ", "و", "ل"],
    "ڈھول": ["ڈ", "ھ", "و", "ل"], "ڈھیر": ["ڈ", "ھ", "ﯿ", "ر"], "کتاب": ["ﻜ", "ﺘ", "ا", "ب"],
    "کوئی": ["ﻜ", "و", "ئ", "ی"], "کھاؤ": ["ﻜ", "ھ", "ا", "ؤ"], "گائی": ["ﮔ", "ا", "ئ", "ی"],
    "گھاس": ["ﮔ", "ھ", "ا", "س"], "ہائے": ["ہـ", "ا", "ئ", "ے"],

    // Five Letter Words
    "بھائی": ["ﺒ", "ھ", "ا", "ئ", "ی"], "بھالو": ["ﺒ", "ھ", "ا", "ﻠ", "و"], "تھوڑی": ["ﺘ", "ھ", "و", "ڑ", "ی"],
    "دھوئی": ["د", "ھ", "و", "ئ", "ی"], "دھوئے": ["د", "ھ", "و", "ئ", "ے"], "کھائی": ["ﻜ", "ھ", "ئ", "ی"],
    "کھائے": ["ﻜ", "ھ", "ئ", "ے"], "کھوئی": ["ﻜ", "ھ", "و", "ئ", "ی"], "کھوئے": ["ﻜ", "ھ", "و", "ئ", "ے"],

    // Six Letter Words
    "کھلاڑی": ["ﻜ", "ھ", "ﻠ", "ا", "ڑ", "ی"]
}

let DEFAULTS = {
    'textSizeValue': 25,
    'buttonWidth': 150,
    'buttonHeight': 50,
    'buttonSpacing': 40,
    'buttonMargin': 20,
    'buttonY': 50,
}

let resetButton;
let currentWord;
let currentWordIndex;
let guessedWord = [];
let alphabetButtons = []; // Array to store the state of each button
let currentAudio;
let selectedCategory = "Two";
let wordButtons = ["Two", "Three", "Four", "Five", "Six"]; // Updated to match the word lengths

// Use default text size and font until you confirm 'Rocher' is loading correctly
let textSizeValue = 25;

let buttonWidth = 150;
let buttonHeight = 50;
let buttonSpacing = 40; // Space between buttons

let hoveredButtonIndex = -1;
let pressedButtonIndex = -1;

// Global variables to track button states
let buttonHover = -1;
let buttonPressed = -1;


let correctAttempts = 0;
let incorrectAttempts = 0


// Calculate button positions and sizes
let buttonMargin = 20;
let buttonY = 50;

// Global variables to track the reset button state
let resetButtonHover = false;
let resetButtonPressed = false;

let alphabetConfig = {};
let heightFactor, widthFactor;

function setup() {
    textFont('Rocher');
    widthFactor = windowWidth / 1440;
    heightFactor = windowHeight / 800;
    console.log('[heightFactor, widthFactor]', heightFactor, widthFactor);

    // Make sure 'guess_words' exists and has a height greater than 0
    // const guessWordsElem = document.getElementById('guess_words');
    // canvasHeight = guessWordsElem.offsetHeight - 10;
    canvasHeight = document.querySelector('main').offsetHeight - document.querySelector('main .row').offsetHeight - 10;
    console.log('[canvasHeight]', canvasHeight);
    let cnv = createCanvas(windowWidth, canvasHeight);
    cnv.parent('guess_words'); // Assign the canvas to the container
    cnv.style('width', '100%');
    cnv.style('height', '100%');

    // rescale variables
    textSizeValue = DEFAULTS['textSizeValue'] * (widthFactor + heightFactor) * 0.4;
    buttonWidth = DEFAULTS['buttonWidth'] * widthFactor;
    buttonHeight = DEFAULTS['buttonHeight'] * heightFactor;
    buttonSpacing = DEFAULTS['buttonSpacing'] * heightFactor * 0.5;
    buttonMargin = DEFAULTS['buttonMargin'] * heightFactor;

    textSize(textSizeValue);
    textAlign(CENTER, CENTER);

    // Configuration for the alphabet buttons
    alphabetConfig = {
        buttonSize: 50 * (widthFactor + heightFactor) * 0.4,
        padding: 10 * (widthFactor + heightFactor) * 0.4,
        buttonsPerRow: 15,
        hoverIncrease: 5,
        // Calculate the start positions based on the canvas size
        get startX() { return width * 0.5 - (this.buttonSize + this.padding) * (this.buttonsPerRow) * 0.5; },
        startY: height * 0.25,
        // get startY() { return height * 0.5 - (this.buttonSize + this.padding) * Math.ceil(Object.keys(URDU_ALPHABETS).length / this.buttonsPerRow) * 0.5; }
    };

    resetButton = {
        x: width * 0.88,
        y: height * 0.80,
        width: width * 0.1,
        height: height * 0.12,
        color: '#1CB0F6', // Default color
        hoverColor: '#1CB0F6', // Color when hovered
        pressColor: '#1CB0F6', // Color when pressed
        isHovered: false,
        isPressed: false
    };

    initializeAlphabetButtons();

    // Remove newWord() call if not defined in this context
    newWord();

    guessedWord = Array(currentWord.length).fill(''); // Initialize with placeholders 
}

function windowResized() {
    widthFactor = windowWidth / 1440;
    heightFactor = windowHeight / 800;
    console.log('[heightFactor, widthFactor]', heightFactor, widthFactor);

    canvasHeight = document.querySelector('main').offsetHeight - document.querySelector('main .row').offsetHeight - 10;
    console.log(windowWidth, canvasHeight);
    resizeCanvas(windowWidth, canvasHeight);

    // rescale variables
    textSizeValue = DEFAULTS['textSizeValue'] * (widthFactor + heightFactor) * 0.4;
    buttonWidth = DEFAULTS['buttonWidth'] * widthFactor;
    buttonHeight = DEFAULTS['buttonHeight'] * heightFactor;
    buttonSpacing = DEFAULTS['buttonSpacing'] * heightFactor * 0.5;
    buttonMargin = DEFAULTS['buttonMargin'] * heightFactor;

    textSize(textSizeValue);
    textAlign(CENTER, CENTER);

    // Configuration for the alphabet buttons
    alphabetConfig = {
        buttonSize: 50 * (widthFactor + heightFactor) * 0.4,
        padding: 10 * (widthFactor + heightFactor) * 0.4,
        buttonsPerRow: 15,
        hoverIncrease: 5,
        // Calculate the start positions based on the canvas size
        get startX() { return width * 0.5 - (this.buttonSize + this.padding) * (this.buttonsPerRow) * 0.5; },
        startY: height * 0.25,
        // get startY() { return height * 0.5 - (this.buttonSize + this.padding) * Math.ceil(Object.keys(URDU_ALPHABETS).length / this.buttonsPerRow) * 0.5; }
    };

    resetButton = {
        x: width * 0.88,
        y: height * 0.80,
        width: width * 0.1,
        height: height * 0.12,
        color: '#1CB0F6', // Default color
        hoverColor: '#1CB0F6', // Color when hovered
        pressColor: '#1CB0F6', // Color when pressed
        isHovered: false,
        isPressed: false
    };

    initializeAlphabetButtons();

    // Remove newWord() call if not defined in this context
    newWord();

    guessedWord = Array(currentWord.length).fill(''); // Initialize with placeholders
}

function draw() {
    background('#e6e6e6');
    drawWordButtons();
    drawAlphabetButtons();
    drawWordGuess();
    drawPlayButton(); // Function to draw the play button
    displayCorrectAttempts();
    displayIncorrectAttempts();
    checkResetButtonHover();
    // drawTooltip();
    drawResetButton();
}

function newWord() {
    let numberOfLetters = getNumberOfLetters(selectedCategory); // Converts "Two" to 2, "Three" to 3, etc.
    let wordList = Object.keys(words).filter(word => words[word].length === numberOfLetters);

    if (wordList.length > 0) {
        let randomWord = random(wordList);
        currentWord = words[randomWord];
        // guessedWord = Array(numberOfLetters).fill('_'); // Initialize with placeholders based on word length.

        let audioPath = `../media/audio/words/${selectedCategory} Letters/${randomWord}.m4a`;
        currentAudio = loadSound(audioPath, function () {
            console.log('Audio loaded successfully');
        }, function () {
            console.log('Error loading audio');
        });
    }


    // Reset the guessedWord array with empty strings for the new word's length
    guessedWord = Array(currentWord.length).fill('');

    // Clear the display area where the guessed word is shown
    drawWordGuess(true); // Pass true to indicate clearing the display
}

function getNumberOfLetters(category) {
    switch (category) {
        case "Two":
            return 2;
        case "Three":
            return 3;
        case "Four":
            return 4;
        case "Five":
            return 5;
        case "Six":
            return 6;
        default:
            return 2; // default to two if there's an issue
    }
}

function initializeAlphabetButtons() {
    let keys = Object.keys(URDU_ALPHABETS);
    console.log('[alphabetConfig]', alphabetConfig);
    keys.forEach((key, index) => {
        let x = alphabetConfig.startX + (alphabetConfig.buttonSize + alphabetConfig.padding) * (index % alphabetConfig.buttonsPerRow);
        let y = alphabetConfig.startY + (alphabetConfig.buttonSize + alphabetConfig.padding) * Math.floor(index / alphabetConfig.buttonsPerRow);
        alphabetButtons.push({
            key: key,
            x: x,
            y: y,
            size: alphabetConfig.buttonSize,
            isHovered: false,
            isPressed: false
        });
    });
}

function drawAlphabetButtons() {
    let keys = Object.keys(URDU_ALPHABETS);
    // Calculate the total width once
    let totalWidth = alphabetConfig.buttonsPerRow * (alphabetConfig.buttonSize + alphabetConfig.padding);

    keys.forEach((key, index) => {
        // Start drawing from the right by subtracting the current button's position from the total width
        let x = alphabetConfig.startX + totalWidth - (alphabetConfig.buttonSize + alphabetConfig.padding) * (index % alphabetConfig.buttonsPerRow) - alphabetConfig.buttonSize;
        let y = alphabetConfig.startY + (alphabetConfig.buttonSize + alphabetConfig.padding) * Math.floor(index / alphabetConfig.buttonsPerRow);

        let button = alphabetButtons[index];
        let isHovered = index === buttonHover;
        let isPressed = index === buttonPressed;
        let currentButtonSize = isHovered ? alphabetConfig.buttonSize + alphabetConfig.hoverIncrease : alphabetConfig.buttonSize;
        let xOffset = isHovered ? -alphabetConfig.hoverIncrease / 2 : 0;
        let yOffset = isHovered ? -alphabetConfig.hoverIncrease / 2 : 0;

        // Update button positions
        button.x = x;
        button.y = y;

        // Button color changes on hover and press
        let buttonColor = isPressed ? '#009EFF' : isHovered ? '#ff6464' : '#ff7575';
        fill(buttonColor);
        noStroke();
        rect(button.x + xOffset, button.y + yOffset, currentButtonSize, currentButtonSize, 5);

        // Text color and style
        fill(0);
        textSize(textSizeValue * 0.8);
        textStyle(NORMAL);
        textAlign(CENTER, CENTER);
        text(URDU_ALPHABETS[key], button.x + alphabetConfig.buttonSize / 2, button.y + alphabetConfig.buttonSize / 2);
    });
}


function updateButtonHover() {
    // Reset hover state before checking
    buttonHover = -1;

    let keys = Object.keys(URDU_ALPHABETS);
    // Calculate the total width of the button area
    let totalWidth = alphabetConfig.buttonsPerRow * (alphabetConfig.buttonSize + alphabetConfig.padding);

    keys.forEach((key, index) => {
        // Calculate x position from the right edge
        let x = alphabetConfig.startX + totalWidth - (alphabetConfig.buttonSize + alphabetConfig.padding) * (index % alphabetConfig.buttonsPerRow) - alphabetConfig.buttonSize;
        let y = alphabetConfig.startY + (alphabetConfig.buttonSize + alphabetConfig.padding) * Math.floor(index / alphabetConfig.buttonsPerRow);

        // Check if the mouse is over this button
        if (mouseX >= x && mouseX <= x + alphabetConfig.buttonSize && mouseY >= y && mouseY <= y + alphabetConfig.buttonSize) {
            buttonHover = index;
        }
    });
}


function updateButtonPress() {
    let buttonSize = 50;
    let startX = (windowWidth - (buttonSize * 15)) / 2;
    let startY = height - (buttonSize * 3);
    let padding = 10;
    let keys = Object.keys(URDU_ALPHABETS);

    // Reset press state before checking
    buttonPressed = -1;

    keys.forEach((key, index) => {
        let x = startX + (buttonSize + padding) * (index % 15);
        let y = startY + (buttonSize + padding) * floor(index / 15);

        // Check if the mouse is pressing this button
        if (mouseX >= x && mouseX <= x + buttonSize && mouseY >= y && mouseY <= y + buttonSize) {
            buttonPressed = index;
        }
    });
}

function checkLetter(selectedLetter) {
    let letterFound = false;

    // Check each letter in the current word
    for (let i = 0; i < currentWord.length; i++) {
        // If the selected letter matches and the guessed word has an empty space there
        if (currentWord[i] === selectedLetter && guessedWord[i] === '') {
            guessedWord[i] = selectedLetter;
            letterFound = true;
            break;
        }
    }

    // If the letter was found in the word, update the display
    if (letterFound) {
        drawWordGuess();

    } else {
        // If the letter was not found, display "غلط" and clear after 1 second
        displayIncorrectGuess();
        // Reset guessedWord array after the "غلط" is cleared
        setTimeout(() => {
            guessedWord = Array(currentWord.length).fill('');
            drawWordGuess();
        }, 1000);
        incorrectAttempts++;
    }

    // If all letters have been guessed, check if the word is correct
    if (!guessedWord.includes('')) {
        if (guessedWord.join('') === currentWord.join('')) {
            console.log("Hurrah");
            // Ensure any pending "غلط" clear is cancelled
            clearTimeout(incorrectTimeout);
            setTimeout(newWord, 1000); // Wait for 2 seconds and get a new word
            correctAttempts++;
        } else {
            console.log("Keep trying!", guessedWord.join(''), currentWord.join(''));
            incorrectAttempts++;
        }
    }

    // Update the attempt counters display
    displayCorrectAttempts();
    displayIncorrectAttempts();
}


function drawWordGuess(correct = true) {
    // Always draw the white rectangle first
    fill('white');
    rect(width * 0.25, height * 0.05, width * 0.5, height * 0.12, 10);

    textSize(textSizeValue * 2);
    textAlign(CENTER, CENTER);

    if (correct) {
        // If the guess is correct, display the guessed word
        fill(0); // Black color for correct guess
        text(guessedWord.join(''), width / 2, height * 0.12);
    } else {
        // If the guess is incorrect, display the "غلط" message
        fill('#ff0000'); // Red color for incorrect guess
        text('غلط', width / 2, height * 0.12);
        // Call the setTimeout here if you want the incorrect message to disappear after 1 second
        setTimeout(function () {
            drawWordGuess(); // This will clear the incorrect message and show the current guessedWord again
        }, 1000);
    }
    textSize(textSizeValue);
}


// Hold the timeout ID for clearing "غلط" so it can be cancelled if needed
let incorrectTimeout;

function displayIncorrectGuess() {
    drawWordGuess(false); // Call with false to indicate the guess was incorrect
    incorrectTimeout = setTimeout(() => {
        guessedWord = Array(currentWord.length).fill('');
        drawWordGuess();
    }, 1000);
}


function drawWordButtons() {
    let startX = width * 0.02; // Adjust as needed for your layout
    let startY = (height - (buttonHeight + buttonSpacing) * wordButtons.length) / 2; // Starting Y position, adjust as needed

    wordButtons.forEach((label, index) => {
        // console.log('[label]', label);
        let y = startY + index * (buttonHeight + buttonSpacing);
        let isHovered = (hoveredButtonIndex === index);
        let isPressed = (pressedButtonIndex === index);

        let buttonFill = isPressed ? '#1899D6' : isHovered ? '#1CB0F6' : '#1CB0F6';
        let yOffset = isHovered ? -5 : 0;
        // console.log('[buttonFill]', buttonFill);
        fill(buttonFill);
        noStroke();
        rect(startX, y + yOffset, buttonWidth, buttonHeight, 20);

        fill(isPressed ? '#d1ccc0' : '0');
        noStroke();
        text(label, startX + buttonWidth / 2, y + buttonHeight / 2 + yOffset);
    });
}

function drawPlayButton() {
    let playButtonX = width * 0.5;
    let playButtonY = height * 0.9; // Position the button below the alphabet buttons
    let buttonSize = 60;

    fill('#7fbab7'); // Green play button
    noStroke();
    ellipse(playButtonX, playButtonY, buttonSize, buttonSize); // Draw the play button

    fill(0); // Black triangle for the play icon
    triangle(
        playButtonX - 10, playButtonY - 15,
        playButtonX - 10, playButtonY + 15,
        playButtonX + 15, playButtonY
    );
}

function checkPlayButtonPressed() {
    let playButtonX = width * 0.5;
    let playButtonY = height * 0.9; // Adjust this as needed
    let buttonSize = 60; // Size of the play button
    // Check if the play button is pressed
    let distance = dist(mouseX, mouseY, playButtonX, playButtonY);
    console.log('[distance]', distance, buttonSize);
    if (distance < buttonSize * 0.5) {
        console.log("Button Pressed")
        // Play the audio if the play button is clicked
        if (currentAudio && currentAudio.isLoaded()) {
            currentAudio.play();
        }
    }
}


function mouseMoved() {
    checkButtonHover();

    alphabetButtons.forEach(button => {
        button.isHovered = collidePointRect(mouseX, mouseY, button.x, button.y, button.size, button.size);
    });

    updateButtonHover();

    // Check if the mouse is over the reset button
    resetButton.isHovered = mouseX > resetButton.x &&
        mouseX < (resetButton.x + resetButton.width) &&
        mouseY > resetButton.y &&
        mouseY < (resetButton.y + resetButton.height);
}

// Helper function to determine if the mouse is within the button bounds
function isMouseWithinButton(x, y, size) {
    return mouseX >= x && mouseX < x + size && mouseY >= y && mouseY < y + size;
}

function mousePressed() {
    let alphabetPressed = false;
    let playButtonX = width / 2;
    let playButtonY = height / 2 + 200; // Position the button below the alphabet buttons
    let buttonSize = 60;
    let keys = Object.keys(URDU_ALPHABETS);

    // Calculate the total width of the button area
    let totalWidth = alphabetConfig.buttonsPerRow * (alphabetConfig.buttonSize + alphabetConfig.padding);


    for (let i = 0; i < keys.length; i++) {
        // Calculate x position from the right edge
        let x = alphabetConfig.startX + totalWidth - (alphabetConfig.buttonSize + alphabetConfig.padding) * (i % alphabetConfig.buttonsPerRow) - alphabetConfig.buttonSize;
        let y = alphabetConfig.startY + (alphabetConfig.buttonSize + alphabetConfig.padding) * Math.floor(i / alphabetConfig.buttonsPerRow);

        if (isMouseWithinButton(x, y, alphabetConfig.buttonSize)) {
            // The alphabet button was pressed
            let letter = keys[i];
            console.log(letter);
            checkLetter(letter); // Handle the letter check logic
            alphabetPressed = true; // Set the flag to avoid further checks
            break; // Exit the loop since we've found the pressed button
        }
    }

    // If an alphabet button was pressed, we don't need to check other buttons
    if (alphabetPressed) {
        return;
    }

    // Check if the play button is pressed
    checkPlayButtonPressed();

    // Check if any word length button was pressed
    checkWordLengthButtonPressed();


    // Check if the play button is pressed
    let distance = dist(mouseX, mouseY, playButtonX, playButtonY);
    if (distance < buttonSize / 2) {
        // Play the audio if the play button is clicked
        if (currentAudio && currentAudio.isLoaded()) {
            currentAudio.play();
        }
    }

    // Reset button logic with new coordinates
    if (mouseX >= width - 350 && mouseX <= width - 200 && mouseY >= height - 200 && mouseY <= height - 130) {
        resetAttempts();
        // Redraw the counters and the reset button to reflect the reset state
        displayCorrectAttempts();
        displayIncorrectAttempts();
        drawResetButton();
    }


    // Check if the reset button is pressed
    if (resetButtonHover) {
        resetButtonPressed = true;
        // Call the reset attempts function
        resetAttempts();
        // Redraw the counters and the reset button to reflect the reset state
        displayCorrectAttempts();
        displayIncorrectAttempts();
    }

    // Check if the reset button is pressed
    if (resetButton.isHovered) {
        resetButton.isPressed = true;

    }


}


function mouseReleased() {
    pressedButtonIndex = -1;

    alphabetButtons.forEach(button => {
        button.isPressed = false;
    });

    // Reset buttonPressed when the mouse is released
    buttonPressed = -1;

    // Reset the button pressed state when the mouse is released
    if (resetButtonPressed) {
        resetButtonPressed = false;
        drawResetButton(); // Redraw the button in its default state
    }
    // Reset the button state when the mouse is released
    resetButton.isPressed = false;
}


function checkButtonHover() {
    let startX = 50;
    let startY = 100;
    hoveredButtonIndex = -1; // Reset hovered button index

    wordButtons.forEach((label, index) => {
        let y = startY + index * (buttonHeight + buttonSpacing);
        if (mouseX > startX && mouseX < startX + buttonWidth &&
            mouseY > y && mouseY < y + buttonHeight) {
            hoveredButtonIndex = index;
        }
    });
}


function checkButtonPress() {
    let startX = 50;
    let startY = 100;
    pressedButtonIndex = -1; // Reset pressed button index

    wordButtons.forEach((label, index) => {
        let y = startY + index * (buttonHeight + buttonSpacing);
        if (mouseX > startX && mouseX < startX + buttonWidth &&
            mouseY > y && mouseY < y + buttonHeight) {
            pressedButtonIndex = index;
        }
    });
}



function checkAlphabetButtonPressed() {
    for (let button of alphabetButtons) {
        if (collidePointRect(mouseX, mouseY, button.x, button.y, button.size, button.size)) {
            console.log(button.key)
            // Return the key of the pressed button
            return button.key;
        }
    }
    // Return false if no button was pressed
    return false;
}

function checkWordLengthButtonPressed() {
    let startX = 100;
    let startY = 100; // Adjust as per your layout

    for (let i = 0; i < wordButtons.length; i++) {
        let buttonLabel = `${wordButtons[i]} Letters`; // Append " Letters" to match the folder name
        let y = startY + i * (buttonHeight + buttonSpacing);
        if (mouseX > startX && mouseX < startX + buttonWidth &&
            mouseY > y && mouseY < y + buttonHeight) {
            selectedCategory = wordButtons[i]; // Update the selected category based on the button
            newWord(); // Call newWord to select a new word and load the corresponding audio
            break; // Break out of the loop once the correct button is pressed
        }
    }
}


function displayCorrectAttempts() {
    // Draw the correct clicks rectangle at the top
    fill('#7fbab7');
    stroke(0);
    strokeWeight(2);
    let btnSize = buttonHeight * 1.4;
    rect(width * 0.9, height * 0.2, btnSize, btnSize, 5);
    fill(0);
    noStroke();
    textSize(textSizeValue * 2);
    textAlign(CENTER, CENTER);
    text(correctAttempts, width * 0.9 + btnSize * 0.5, height * 0.2 + btnSize * 0.5);
    textSize(textSizeValue);
}

function displayIncorrectAttempts() {
    // Draw the wrong clicks rectangle at the bottom
    fill('#ee7569');
    stroke(0);
    strokeWeight(2);
    let btnSize = buttonHeight * 1.4;
    rect(width * 0.9, height * 0.4, btnSize, btnSize, 5);
    textSize(textSizeValue * 2);
    textAlign(CENTER, CENTER);
    text(incorrectAttempts, width * 0.9 + btnSize * 0.5, height * 0.4 + btnSize * 0.5);
    // text(incorrectAttempts, width - 265, buttonY + 270);
    textSize(textSizeValue);
}


function resetAttempts() {
    correctAttempts = 0;
    incorrectAttempts = 0;
    // Redraw the counters
    displayCorrectAttempts();
    displayIncorrectAttempts();
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


function checkResetButtonHover() {
    let buttonX = width - 350;
    let buttonY = height - 200;
    let buttonWidth = 125;
    let buttonHeight = 70;

    resetButtonHover = mouseX >= resetButton.x && mouseX <= resetButton.x + resetButton.width / 2 && 
                       mouseY >= resetButton.y && mouseY <= resetButton.y + resetButton.height / 2;
}

