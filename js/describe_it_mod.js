let game;


// Dimensions and positions for UI elements
let buttonHeight = 70;
let buttonMargin = 20;
let buttonY = 50;
let scale = 150;
let textSizeValue = 25;

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


// Number of sentences to display per image
let n = 8;

// Define the ImageButton class
class ImageButton {
    constructor(imagePath, sentences) {
      this.imagePath = imagePath;
      this.sentences = sentences;
      this.image = loadImage(this.imagePath); // Assuming loadImage is a p5.js function
    }
  }
  
  // Define the SentenceButton class
  class SentenceButton {
    constructor(x, y, width, height, text, isCorrect) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.text = text;
      this.isCorrect = isCorrect;
      this.clicked = false;
      this.clickedTime = 0;
      this.wrong = false;
    }
  
    draw() {
      fill(this.clicked && this.isCorrect ? '#7fbab7' : this.wrong ? '#ee7569' : '#e6e7e8');
      stroke(0);
      strokeWeight(2);
      rect(this.x, this.y, this.width, this.height, 5);
      fill(0);
      noStroke();
      textSize(20);
      textAlign(CENTER, CENTER);
      text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }
  
    checkClick(mx, my) {
      if (mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height) {
        this.clicked = true;
        this.clickedTime = millis();
        return this.isCorrect;
      }
      return false;
    }
  }
  
  // Define the ResetButton class
  class ResetButton {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.isHovered = false;
      this.isPressed = false;
    }
  
    draw() {
      let buttonColor = this.isPressed ? '#1899D6' : this.isHovered ? '#1CB0F6' : '#1CB0F6';
      fill(buttonColor);
      noStroke();
      rect(this.x, this.y, this.width, this.height, 20);
      fill('#FFF');
      textSize(25);
      textAlign(CENTER, CENTER);
      text("Reset", this.x + this.width / 2, this.y + this.height / 2);
    }
  
    checkHover(mx, my) {
      this.isHovered = mx > this.x && mx < (this.x + this.width) && my > this.y && my < (this.y + this.height);
    }
  
    checkClick(mx, my) {
      if (this.isHovered) {
        this.isPressed = true;
        return true;
      }
      return false;
    }
  
    reset() {
      this.isPressed = false;
    }
}


class ImageDescriptionGame {
    constructor(imagesDict) {
        this.imagesDict = imagesDict;
        this.resetButton = new ResetButton(30, height - 90, 150, 70);
        this.sentenceButtons = [];
        this.correctClickCount = 0;
        this.wrongClickCount = 0;
        this.selectedImage = null;
        this.selectNSentencesAndImage();
      }
  
    selectNSentencesAndImage() {
      let keys = Object.keys(this.imagesDict);
      let totalImages = keys.length;
      let randomSelectedImageIndex = floor(random(totalImages));
      let selectedKey = keys[randomSelectedImageIndex];
      this.selectedImage = new ImageButton(selectedKey, this.imagesDict[selectedKey]);
      this.correctSentencesKeys = this.selectedImage.sentences.map((_, index) => index);
  
      let otherSentences = [];
      keys.forEach(key => {
        if (key !== selectedKey) {
          otherSentences = otherSentences.concat(this.imagesDict[key]);
        }
      });
  
      otherSentences = shuffle(otherSentences);
      let additionalSentences = otherSentences.slice(0, n - this.selectedImage.sentences.length);
      let combinedSentences = this.selectedImage.sentences.concat(additionalSentences);
      sentences = shuffle(combinedSentences);
  
      this.createSentenceButtons(sentences, selectedKey);
    }
  
    createSentenceButtons(sentences, correctKey) {
      this.sentenceButtons = sentences.map((sentence, index) => {
        let isCorrect = this.imagesDict[correctKey].includes(sentence);
        return new SentenceButton(
          1.5 * scale, buttonY + index * (buttonHeight + buttonMargin),
          (width / 2) - 2 * scale, buttonHeight, sentence, isCorrect
        );
      });
    }
  
    draw() {
      background(255);
      let scale = 0.8;
      let imgAspectRatio = this.selectedImage.image.width / this.selectedImage.image.height;
      let drawWidth = (width / 2) * scale;
      let drawHeight = drawWidth / imgAspectRatio;
  
      if (drawHeight > height * scale) {
        drawHeight = height * scale;
        drawWidth = drawHeight * imgAspectRatio;
      }
  
      fill('#c2efff');
      noStroke();
      rect((width / 2), 0, width/2, height, 0);
      let imgX = width / 2 + (width / 2 - drawWidth) / 2;
      image(this.selectedImage.image, imgX, (height - drawHeight) / 2, drawWidth, drawHeight);
  
      fill('#c2e0ff');
      noStroke();
      rect(0, 0, width/2, height, 0);
      this.sentenceButtons.forEach(button => button.draw());
      this.drawClickCounters();
      this.resetButton.draw();
    }
  
    drawClickCounters() {
      // Same implementation as previously defined
    }
  
    handleSentenceClick(index) {
      let clickedButton = this.sentenceButtons[index];
      if (clickedButton.isCorrect) {
        this.correctClickCount++;
        clickedButton.clicked = true;
        clickedButton.clickedTime = millis();
      } else {
        this.wrongClickCount++;
        clickedButton.wrong = true;
        setTimeout(() => {
          clickedButton.wrong = false;
          this.sentenceButtons.forEach(button => button.draw());
        }, 1000);
      }
  
      if (this.correctClickCount === this.correctSentencesKeys.length) {
        this.resetGame();
      }
    }
  
    resetGame() {
      this.correctClickCount = 0;
      this.wrongClickCount = 0;
      this.selectNSentencesAndImage();
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
    game = new ImageDescriptionGame(imagesDict);
}

function draw() {
  game.draw();
}

function mousePressed() {
  game.sentenceButtons.forEach((button, index) => {
    if (button.checkClick(mouseX, mouseY)) {
      game.handleSentenceClick(index);
    }
  });

  if (game.resetButton.checkClick(mouseX, mouseY)) {
    game.resetGame();
  }
}

function mouseReleased() {
  game.resetButton.reset();
}

function mouseMoved() {
  game.resetButton.checkHover(mouseX, mouseY);
}