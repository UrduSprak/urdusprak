var URDU_ALPHABETS = {
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

let DEFAULTS = {
    'boxW': 50,
    'boxH': 50,
    'border_radius': 10,
    'textSizeValue': 25,
    'join_rectW': 500,
    'join_rectH': 70,
}

let canvasHeight = 100;
let draggableElements = [];
let startingPositions = [];
let targetPositions = [];
let labels = [];
let placedChars = [];

let resetBtn, trashButton;

let boxW = 60;
let boxH = 60;
let border_radius = 10

let join_rectX = 0;
let join_rectY = 0;
let join_rectW = 0;
let join_rectH = 0;

let textSizeValue = 25;

// Assuming you know the position (x, y) and size (w, h) of the black rectangle


// Iterating through the dictionary to get labels
for (var key in URDU_ALPHABETS) {
    if (URDU_ALPHABETS.hasOwnProperty(key)) {
        labels.push(URDU_ALPHABETS[key]);
    }
}

function setup() {
    textFont('Rocher');
    widthFactor = windowWidth / 1440;
    heightFactor = windowHeight / 800;
    console.log('[heightFactor, widthFactor]', heightFactor, widthFactor);

    canvasHeight = document.querySelector('main').offsetHeight - document.querySelector('main .row').offsetHeight - 10;
    let cnv = createCanvas(windowWidth, canvasHeight);
    cnv.parent('dragDrop_animator'); // Assign the canvas to the container
    cnv.style('width', '100%');
    cnv.style('height', '100%');

    boxW = DEFAULTS['boxW'] * widthFactor;
    boxH = DEFAULTS['boxH'] * heightFactor;
    textSizeValue = DEFAULTS['textSizeValue'] * (widthFactor + heightFactor) * 0.4;

    textSize(textSizeValue);

    trashButton = new TrashButton(width - 100, canvasHeight - 50, 100 * widthFactor, 100 * widthFactor);

    trashButtonBounds = {
        x: trashButton.x - 50,
        y: trashButton.y - 50,
        w: trashButton.w,
        h: trashButton.h
    };

    resetBtn = new ResetButton(100, height - 80, 128, 64, 20, label = 'Reset');

    placedChars = new Array(targetPositions.length).fill('');

    // Define starting positions for the draggable elements
    let cols = 20;
    let rows = ceil(labels.length / cols);
    let padding = 10 * (widthFactor + heightFactor) * 0.5;
    let startY = 30;

    // Calculate the total width of the grid containing the characters
    let totalGridWidth = cols * (boxW + padding) - padding;

    // Calculate the starting X position for the characters to be centered
    let startX = (width - totalGridWidth) / 2;
    let x, y;

    for (let i = 0; i < labels.length; i++) {
        let row = floor(i / cols);
        let col = cols - 1 - (i % cols); // Start from the right-most column

        x = startX + col * (boxW + padding);
        y = startY + row * (boxH + padding);

        // Adjust startX for the last row if it is not completely filled
        if (row === rows - 1) {
            let itemsInLastRow = labels.length % cols || cols;
            if (itemsInLastRow !== cols) { // If last row isn't full, center it
                let lastRowWidth = itemsInLastRow * (boxW + padding) - padding;
                let emptySpace = totalGridWidth - lastRowWidth;
                x = startX + emptySpace / 2 + (col - (cols - itemsInLastRow)) * (boxW + padding);
            }
        }

        let draggable = new Draggable(x, y, boxW, boxH, border_radius, labels[i], true);
        draggable.startingIndex = i; // Assign an index to each draggable
        draggableElements.push(draggable);
        startingPositions.push({ x: x, y: y });
    }

    // Calculate the total width of all targets including padding
    let targetsCount = 20; // Number of target positions
    let totalTargetsWidth = targetsCount * boxW + (targetsCount - 1) * padding;

    // Define the starting X position for the first target to center them
    let targetStartX = (width - totalTargetsWidth) / 2;
    let targetY = y + boxH * 2; // Positioning target boxes in the lower half of the canvas

    // Create and store target positions
    for (let i = 0; i < targetsCount; i++) {
        targetPositions.push({ x: targetStartX + i * (boxW + padding), y: targetY });
    }

    join_rectW = DEFAULTS['join_rectW'] * widthFactor;
    join_rectH = DEFAULTS['join_rectH'] * heightFactor;
    join_rectX = width / 2 - join_rectW / 2;
    join_rectY = targetY + boxH * 2;
}

function windowResized() {
    // draggableElements = [];
    // startingPositions = [];
    // targetPositions = [];
    // placedChars = [];

    widthFactor = windowWidth / 1440;
    heightFactor = windowHeight / 800;
    console.log('[heightFactor, widthFactor]', heightFactor, widthFactor);

    canvasHeight = document.querySelector('main').offsetHeight - document.querySelector('main .row').offsetHeight - 10;
    console.log(windowWidth, canvasHeight);
    resizeCanvas(windowWidth, canvasHeight);

    boxW = DEFAULTS['boxW'] * widthFactor;
    boxH = DEFAULTS['boxH'] * heightFactor;
    textSizeValue = DEFAULTS['textSizeValue'] * (widthFactor + heightFactor) * 0.4;

    textSize(textSizeValue);

    trashButton = new TrashButton(width - 100, canvasHeight - 50, 100 * widthFactor, 100 * widthFactor);

    trashButtonBounds = {
        x: trashButton.x - 50,
        y: trashButton.y - 50,
        w: trashButton.w,
        h: trashButton.h
    };

    resetBtn = new ResetButton(100, height - 80, 128, 64, 20, label = 'Reset');

    // placedChars = new Array(targetPositions.length).fill('');

    // Define starting positions for the draggable elements
    let cols = 20;
    let rows = ceil(labels.length / cols);
    let padding = 10 * (widthFactor + heightFactor) * 0.5;
    let startY = 30;

    // Calculate the total width of the grid containing the characters
    let totalGridWidth = cols * (boxW + padding) - padding;

    // Calculate the starting X position for the characters to be centered
    let startX = (width - totalGridWidth) / 2;
    let x, y;

    for (let i = 0; i < labels.length; i++) {
        let row = floor(i / cols);
        let col = cols - 1 - (i % cols); // Start from the right-most column

        x = startX + col * (boxW + padding);
        y = startY + row * (boxH + padding);

        // Adjust startX for the last row if it is not completely filled
        if (row === rows - 1) {
            let itemsInLastRow = labels.length % cols || cols;
            if (itemsInLastRow !== cols) { // If last row isn't full, center it
                let lastRowWidth = itemsInLastRow * (boxW + padding) - padding;
                let emptySpace = totalGridWidth - lastRowWidth;
                x = startX + emptySpace / 2 + (col - (cols - itemsInLastRow)) * (boxW + padding);
            }
        }

        let draggable = new Draggable(x, y, boxW, boxH, border_radius, labels[i], true);
        draggable.startingIndex = i; // Assign an index to each draggable
        draggableElements[i] = draggable;
        startingPositions[i] = { x: x, y: y };
    }

    // Calculate the total width of all targets including padding
    let targetsCount = 20; // Number of target positions
    let totalTargetsWidth = targetsCount * boxW + (targetsCount - 1) * padding;

    // Define the starting X position for the first target to center them
    let targetStartX = (width - totalTargetsWidth) / 2;
    let targetY = y + boxH * 2; // Positioning target boxes in the lower half of the canvas

    // Create and store target positions
    for (let i = 0; i < targetsCount; i++) {
        targetPositions[i] = { x: targetStartX + i * (boxW + padding), y: targetY };
    }

    join_rectW = DEFAULTS['join_rectW'] * widthFactor;
    join_rectH = DEFAULTS['join_rectH'] * heightFactor;
    join_rectX = width / 2 - join_rectW / 2;
    join_rectY = targetY + boxH * 2;
}

let currentlyDragging = null;

function draw() {
    background(255); // White canvas background

    // Draw starting positions as empty slots
    fill('#FFA500');
    for (let pos of startingPositions) {
        rect(pos.x, pos.y, boxW, boxH, 10);
    }

    // Draw target positions as empty slots
    fill('#005ea2');
    for (let pos of targetPositions) {
        rect(pos.x, pos.y, boxW, boxH, 10);
    }

    // Draw all non-dragging elements first
    for (let draggable of draggableElements) {
        if (!draggable.dragging) {
            draggable.display();
        } else {
            // Store the currently dragging element
            currentlyDragging = draggable;
        }
    }

    // Draw the black rectangle for visual reference
    fill('#e6e6e6');
    strokeWeight(0); // Thickness of the border
    rect(join_rectX, join_rectY, join_rectW, join_rectH, border_radius);

    // Draw the text for joined characters
    drawJoinedChars(join_rectX, join_rectY, join_rectW, join_rectH);

    fill('#000000');
    resetBtn.display();
    trashButton.display()

    // Then draw the currently dragging element on top
    if (currentlyDragging) {
        currentlyDragging.display();
        currentlyDragging = null; // Reset for the next draw cycle
    }


}

// Trash Button Clicked function to handle the logic when the trash button is clicked
function trashButtonClicked() {
    // Logic to handle trash button click
    // Example: Remove the currently dragging element
    if (currentlyDragging) {
        let index = draggableElements.indexOf(currentlyDragging);
        if (index > -1) {
            draggableElements.splice(index, 1);
            if (currentlyDragging.lastTargetIndex !== undefined) {
                placedChars[currentlyDragging.lastTargetIndex] = '';
            }
        }
    }
}

function drawJoinedChars(x, y, w, h) {
    let joinedText = '';

    // Concatenate characters stored in placedChars to form the joined text
    for (let char of placedChars) {
        joinedText += char || ' '; // Append the character or a space if null/undefined
    }

    // Remove spaces from the start of the text
    joinedText = joinedText.trimStart();

    // Reverse the text for right-to-left languages like Urdu
    joinedText = joinedText.split('').reverse().join('');

    fill(0); // Set the fill color for the text to black
    noStroke(); // Ensure there is no stroke around the text
    textSize(textSizeValue * 1.5); // Set the text size

    // Set text alignment to center
    textAlign(CENTER);

    // Calculate the center position
    let textX = x + w / 2;
    let textY = y + h / 2;

    // Draw the text at the center of the rectangle
    text(joinedText, textX, textY + 10);
    textSize(textSizeValue);
}


function createNewDraggableAtStart(label, index) {
    // Use the index to find the corresponding starting position
    let startPosition = startingPositions[index];
    // Create a new Draggable object with the correct label
    let newDraggable = new Draggable(startPosition.x, startPosition.y, boxW, boxH, border_radius, label, true);
    newDraggable.startingIndex = index; // Keep track of the starting index
    // Add the new Draggable to the array of draggable elements
    draggableElements.push(newDraggable);
}


// Draggable class
class Draggable {
    constructor(x, y, w, h, r, label, isAtStartPosition) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.label = label;
        this.dragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.lastValidPosition = { x: x, y: y }; // Store the last valid position
        this.isAtStartPosition = isAtStartPosition;
    }

    display() {
        fill(255, 100, 100);
        rect(this.x, this.y, this.w, this.h, this.r);
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.label, this.x + this.w / 2, this.y + this.h / 2);
    }

    overlaps(other) {
        return !(this.x + this.w < other.x || this.x > other.x + other.w ||
            this.y + this.h < other.y || this.y > other.y + other.h);
    }

    mousePressed() {
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            this.dragging = true;
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
            // this.element.style('z-index', '10'); // Temporarily set a high z-index
        }
    }

    mouseReleased() {
        this.dragging = false;
        let validDrop = false;
    
        // Check for overlap with other draggable objects
        for (let other of draggableElements) {
            if (this !== other && this.overlaps(other)) {
                this.handleOverlapWith(other);
                return; // If there's an overlap, handle it and stop checking further
            }
        }

        // Check if the object is released over the trash button
        if (this.isOver(trashButtonBounds)) {
            // If the draggable was in a target position, remove it
            if (this.lastTargetIndex !== undefined) {
            removeFromPlacedChars(this.label); // Clear from placedChars if it was in a target position
            this.removeDraggable(); // Remove the draggable
            } else {
            this.snapBackToStart(); // If it wasn't in a target position, snap it back to the start
            }
            return; // Exit the function after handling trash logic
        }
        

        // Clear the previous position in placedChars if this draggable was placed before
        if (this.lastTargetIndex !== undefined) {
            placedChars[this.lastTargetIndex] = '';
        }

        // Check if over any target position and not overlapping with other objects
        for (let i = 0; i < targetPositions.length; i++) {
            let target = targetPositions[i];
            if (this.isOver(target) && !this.overlapsWithAnyOther(target)) {
                this.x = target.x;
                this.y = target.y;
                this.lastValidPosition = { x: target.x, y: target.y };
                validDrop = true;

                // Remember the new target index
                this.lastTargetIndex = i;

                // Check for skipped positions and add spaces if needed
                for (let j = 0; j < i; j++) {
                    if (!placedChars[j]) {
                        // If a target position is skipped, insert a space
                        placedChars[j] = ' ';
                    }
                }

                // Update placedChars with the new position
                placedChars[i] = this.label;

                // If this element was at a starting position, create a new one
                if (this.isAtStartPosition) {
                    createNewDraggableAtStart(this.label, this.startingIndex);
                    this.isAtStartPosition = false;
                }
                break;
            }
        }

        // If the draggable was not placed on a new target, restore the previous position
        if (!validDrop) {
            if (this.lastTargetIndex !== undefined) {
                placedChars[this.lastTargetIndex] = this.label;
            }
            this.snapBackToStart();
        }

        // Log for debugging
        // console.log("placedChars after update:", placedChars);
    }

    resetToStartingPosition() {
        // Reset position
        this.x = this.lastValidPosition.x;
        this.y = this.lastValidPosition.y;

        // Reset other properties if necessary
        this.dragging = false;

        // If this Draggable should create a new one at its starting position when reset
        if (this.isAtStartPosition) {
            // Create a new Draggable or handle as needed
        }
    }


    // Method to check if draggable is over any target position
    isOverAnyTarget() {
        return targetPositions.some(target => this.isOver(target));
    }

    overlapsWithAnyOther(position) {
        return draggableElements.some((other) => {
            return other !== this && this.overlaps(other) && other.isOver(position);
        });
    }

    mouseDragged() {
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    isOver(position) {
        let centerX = this.x + this.w / 2;
        let centerY = this.y + this.h / 2;
        return centerX > position.x && centerX < position.x + this.w &&
            centerY > position.y && centerY < position.y + this.h;
    }

    handleOverlapWith(other) {
        // Decide what should happen if an object is dropped on another
        // For now, let's just snap back to the last valid position
        this.snapBackToLastValidPosition();
    }

    snapBackToLastValidPosition() {
        this.x = this.lastValidPosition.x;
        this.y = this.lastValidPosition.y;
    }

    snapBackToStart() {
        let startMatch = startingPositions.find(p => this.isOver(p));
        if (startMatch) {
            this.x = startMatch.x;
            this.y = startMatch.y;
            this.lastValidPosition = { ...startMatch };
            this.isAtStartPosition = true;

            // Clear the character from placedChars based on the last target index
            if (this.lastTargetIndex !== undefined && placedChars[this.lastTargetIndex] === this.label) {
                placedChars[this.lastTargetIndex] = '';
            }
        } else {
            this.x = this.lastValidPosition.x;
            this.y = this.lastValidPosition.y;
        }
    }

    // Method to remove the draggable element
    removeDraggable() {
        let index = draggableElements.indexOf(this);
        if (index > -1) {
        draggableElements.splice(index, 1);
        }
        removeFromPlacedChars(this.label);
    }
}


function mousePressed() {
    for (let draggable of draggableElements) {
        draggable.mousePressed();
    }
    trashButton.mousePressed();
    resetBtn.mousePressed();

}

function mouseDragged() {
    for (let draggable of draggableElements) {
        draggable.mouseDragged();
    }
}

function mouseReleased() {
    for (let draggable of draggableElements) {
        draggable.mouseReleased();
    }
    resetBtn.release();
}

// Function to remove an object from placedChars
function removeFromPlacedChars(label) {
    let index = placedChars.findIndex(char => char === label);
    if (index !== -1) {
      placedChars[index] = ''; // Clear the entry from placedChars
    }
  }

// Function to reset a draggable to its starting position
Draggable.prototype.resetToStartingPosition = function () {
    let startPos = startingPositions[this.startingIndex];
    this.x = startPos.x;
    this.y = startPos.y;
    this.isAtStartPosition = true;
}


// ResetButton class
class ResetButton {
    constructor(x, y, w, h, r, label, isAtStartPosition) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.label = label;
        this.dragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.lastValidPosition = { x: x, y: y }; // Store the last valid position
        this.isAtStartPosition = isAtStartPosition;
        this.scale = 1; // Add a scale property
        this.isHovered = false; // Track hover state
    }

    display() {
        push(); // Start a new drawing state

        // Check if the mouse is over the button and update scale
        this.isHovered = this.mouseOver();
        this.scale = this.isHovered ? 1.1 : 1; // Scale up if hovered

        // Translate to the button's center position
        translate(this.x + this.w / 2, this.y + this.h / 2);
        // Apply the scaling effect
        scale(this.scale);

        // Set fill color based on press state
        fill(this.isPressed ? '#1899D6' : '#1CB0F6');

        // Draw the rectangle centered
        // Slightly offset down if pressed to simulate the press effect
        rectMode(CENTER);
        rect(0, this.isPressed ? 2 : 0, this.w, this.h - (this.isPressed ? 2 : 0), this.r);

        // Button text
        fill(0);
        noStroke(); // Ensure no stroke is applied to the text
        textSize(textSizeValue * 1.5);
        textAlign(CENTER, CENTER);
        // Adjust text position based on press
        text(this.label, 0, this.isPressed ? 2 : 0);

        pop(); // Restore original state
    }

      // Check if the mouse is over the button
    mouseOver() {
        return mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h;
    }

    // Update the button state when released
    release() {
        this.isPressed = false; // Reset the press state
    }

    mousePressed() {
        if (this.mouseOver()) {
            this.isPressed = true;
            resetSketch(); // Call resetSketch when the button is pressed
        }
    }
}

function resetSketch() {
    // Clear the placedChars array by setting each element to an empty string
    placedChars.fill('');

    // Remove all draggable elements from the canvas
    draggableElements = [];

    // Recreate draggable elements at their starting positions
    for (let i = 0; i < labels.length; i++) {
        let label = labels[i];
        let startPosition = startingPositions[i];
        let draggable = new Draggable(startPosition.x, startPosition.y, boxW, boxH, border_radius, label, true);
        draggable.startingIndex = i;
        draggableElements.push(draggable);
    }

    // Redraw the canvas to reflect the changes
    redraw(); // Only if you're not using a continuous draw loop
}

class TrashButton {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.scale = 1; // Scale factor
        this.trash_bin_svg = loadImage("../media/page_imgs/trash_bin.svg");
    }

    display() {
        // Check if mouse is over the button and update scale
        this.isHovered = this.mouseOver();
        this.scale = this.isHovered ? 1.1 : 1; // Scale up if hovered

        imageMode(CENTER);
        push(); // Start a new drawing state
        translate(this.x, this.y); // Translate to the button's position
        scale(this.scale); // Apply the scaling effect
        image(this.trash_bin_svg, 0, 0, this.w, this.h);
        pop(); // Restore original state
    }

    mouseOver() {
        // Check if mouse is within button bounds
        return mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 &&
               mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2;
    }

    mousePressed() {
        if (this.isHovered) {
            console.log("clicked");
            trashButtonClicked();
        }
    }
}


