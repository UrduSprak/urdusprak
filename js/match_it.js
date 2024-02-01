
let selectedCategory = "Level 1";
let levelRects = [];
let levelLabels = [
    "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6"
];
let levels = {
    "Level 1": { 
        urdu: {
          0: "میں نے کھانا کھایا",
          1: "آج موسم اچھا ہے",
          2: "وہ کتاب پڑھ رہی ہے",
          3: "میرا نام علی ہے",
          4: "میں اسکول جا رہا ہوں",
          5: "میز پر کتاب ہے",
          6: "کیا آپ انگریزی بولتے ہیں؟",
          7: "وہ کھانا پکا رہی ہے",
          8: "یہ میرا دوست ہے",
          9: "باہر بارش ہو رہی ہے"
        }, 
        swedish: {
          0: "Jag åt mat",
          1: "Vädret är bra idag",
          2: "Hon läser en bok",
          3: "Mitt namn är Ali",
          4: "Jag går till skolan",
          5: "Det finns en bok på bordet",
          6: "Talar du engelska?",
          7: "Hon lagar mat",
          8: "Det här är min vän",
          9: "Det regnar ute"
        } 
      },

      "Level 2": { 
        urdu: {
          0: "میں نے آپ کو ایک خط لکھا ہے",
          1: "ہم پارک میں چہل قدمی کر رہے ہیں",
          2: "کیا ہم کل ملاقات کر سکتے ہیں؟",
          3: "مجھے اردو بولنا سیکھنا ہے",
          4: "یہ کتاب میری بہن کی ہے",
          5: "میں نے سویڈن میں تعلیم حاصل کی",
          6: "آپ کا پسندیدہ رنگ کیا ہے؟",
          7: "میری بلی نے چوہا پکڑا",
          8: "بازار میں بہت بھیڑ ہے",
          9: "میں رات کا کھانا تیار کر رہا ہوں"
        }, 
        swedish: {
          0: "Jag har skrivit ett brev till dig",
          1: "Vi promenerar i parken",
          2: "Kan vi träffas imorgon?",
          3: "Jag vill lära mig att tala urdu",
          4: "Den här boken är min systers",
          5: "Jag studerade i Sverige",
          6: "Vad är din favoritfärg?",
          7: "Min katt fångade en mus",
          8: "Det är mycket folk på marknaden",
          9: "Jag förbereder middagen"
        } 
      },

      "Level 3": { 
        urdu: {
          0: "میں نے آپ کا پیغام پڑھا اور سمجھا",
          1: "وہ ہر صبح جاگنگ کرتی ہے",
          2: "کیا آپ مجھے اس مسئلہ کا حل بتا سکتے ہیں؟",
          3: "میں نے سویڈن میں دو سال گزارے ہیں",
          4: "اس نے کہا کہ وہ کل آئے گا",
          5: "میری ماں نے مجھے بہت سی چیزیں سکھائی ہیں",
          6: "وہ کتابوں کی دکان پر کام کرتا ہے",
          7: "کیا آپ مجھے اپنے بارے میں مزید بتا سکتے ہیں؟",
          8: "اس نے ایک لمبی داستان سنائی",
          9: "میں نے اپنی چابیاں کہیں کھو دی ہیں"
        }, 
        swedish: {
          0: "Jag läste ditt meddelande och förstod det",
          1: "Hon joggar varje morgon",
          2: "Kan du förklara lösningen på detta problem för mig?",
          3: "Jag har tillbringat två år i Sverige",
          4: "Han sa att han kommer imorgon",
          5: "Min mamma har lärt mig många saker",
          6: "Han arbetar i en bokhandel",
          7: "Kan du berätta mer om dig själv?",
          8: "Han berättade en lång historia",
          9: "Jag har tappat bort mina nycklar någonstans"
        } 
      },

      "Level 4": { 
        urdu: {
          0: "میں نے اپنے دوست کو ایک خوبصورت تحفہ دیا",
          1: "وہ اکثر مشکل حالات میں مدد کرتا ہے",
          2: "کیا آپ مجھے اس کہانی کا خلاصہ بتا سکتے ہیں؟",
          3: "ہم نے سویڈن کے تاریخی مقامات کا دورہ کیا",
          4: "یہ کتاب میری شخصیت پر گہرا اثر ڈالتی ہے",
          5: "میرے خیال میں آپ کو ڈاکٹر سے مشورہ لینا چاہیے",
          6: "اس نے مجھے ایک پیچیدہ مسئلہ حل کرنے میں مدد کی",
          7: "ہمارے خاندانی تاریخی پس منظر میں بہت دلچسپی ہے",
          8: "وہ ہر روز مختلف قسم کی کتابیں پڑھتی ہے",
          9: "میں نے اسے کہا کہ وہ وقت پر آئے"
        }, 
        swedish: {
          0: "Jag gav min vän en vacker present",
          1: "Han hjälper ofta i svåra situationer",
          2: "Kan du sammanfatta den här berättelsen för mig?",
          3: "Vi besökte historiska platser i Sverige",
          4: "Den här boken har haft ett stort inflytande på min personlighet",
          5: "Jag tror att du borde rådfråga en läkare",
          6: "Hon hjälpte mig att lösa ett komplicerat problem",
          7: "Vår familj har en intressant historisk bakgrund",
          8: "Hon läser olika typer av böcker varje dag",
          9: "Jag bad honom komma i tid"
        } 
      },
      
      "Level 5": { 
        urdu: {
          0: "میری عمر کے مطابق یہ کتاب بہت معلوماتی اور دلچسپ ہے",
          1: "اگر آپ کو یاد ہو تو کیا آپ مجھے کل کے میٹنگ کے منٹس بھیج سکتے ہیں؟",
          2: "اس شہر کی تاریخ اور ثقافت بہت رنگین اور متنوع ہے",
          3: "مجھے امید ہے کہ آپ کا سفر خوشگوار اور آرام دہ ہوگا",
          4: "ان کی کہانی نے مجھے بہت متاثر کیا، خاص طور پر ان کی جدوجہد اور ہمت",
          5: "اس تجربے نے میری زندگی کو ایک نئی سمت میں موڑ دیا",
          6: "ہماری ترجیحات زندگی کے مختلف مراحل میں تبدیل ہوتی رہتی ہیں"
        }, 
        swedish: {
          0: "För min ålder är denna bok mycket informativ och intressant",
          1: "Om du kommer ihåg, kan du skicka mig protokollet från gårdagens möte?",
          2: "Denna stadens historia och kultur är mycket färgrik och mångsidig",
          3: "Jag hoppas att din resa blir angenäm och bekväm",
          4: "Hans berättelse påverkade mig mycket, särskilt hans kamp och mod",
          5: "Denna erfarenhet har ändrat mitt livs riktning",
          6: "Våra prioriteringar förändras genom olika skeden av livet"
        } 
      },

      "Level 6": { 
        urdu: {
          0: "ماہرین تعلیم اس بات پر متفق ہیں کہ بچوں کی ابتدائی تعلیم ان کی مستقبل کی کامیابی کے لیے نہایت اہم ہے",
          1: "عالمی معیشت کے مسائل کو حل کرنے کے لئے مختلف ممالک کے درمیان مؤثر بات چیت ضروری ہے",
          2: "ماحولیاتی تبدیلیوں کے اثرات کو کم کرنے کے لئے عالمی سطح پر مشترکہ کوششیں کرنی چاہیے",
          3: "موجودہ دور کی تکنیکی ترقیوں نے انسانی زندگی کو بہت زیادہ آسان اور موثر بنا دیا ہے",
          4: "جمہوریت کی بقا اور استحکام کے لئے شہریوں کی بیداری اور فعال شرکت انتہائی ضروری ہے",
          5: "عالمی سیاست میں توازن کو برقرار رکھنے کے لئے مختلف ممالک کی خارجہ پالیسیوں میں توازن ضروری ہے",
          6: "تحقیقی منصوبوں میں شراکت داری سے نہ صرف نئے خیالات کی تخلیق ہوتی ہے بلکہ علمی ترقی بھی ہوتی ہے"
        }, 
        swedish: {
          0: "Utbildningsexperter är överens om att barns tidiga utbildning är avgörande för deras framtida framgång",
          1: "Effektiv kommunikation mellan olika länder är nödvändig för att lösa globala ekonomiska problem",
          2: "Globala ansträngningar behövs för att minska effekterna av miljöförändringar",
          3: "Den nuvarande erans tekniska framsteg har gjort mänskligt liv mycket enklare och effektivare",
          4: "Medborgarnas medvetenhet och aktiva deltagande är avgörande för demokratins överlevnad och stabilitet",
          5: "Balans i olika länders utrikespolitik är nödvändig för att upprätthålla balans i global politik",
          6: "Samarbete i forskningsprojekt skapar inte bara nya idéer utan också akademisk utveckling"
        } 
      }      
      
};
  

let buttonHeight = 40;
let rectHeight = 60;
let rectMargin = 20;
let rectWidth;

let matchAttempts = {};
let matchTimeout = 1000; // Time in milliseconds to flash red


let textSizeValue = 25;


let selectedUrduRect = null;
let selectedSwedishRect = null;

let sentencesRects = [];

  
function setup() {
    textFont('Rocher');
    textSize(textSizeValue);
    textAlign(CENTER, CENTER);

    // Make sure 'guess_words' exists and has a height greater than 0
    const guessWordsElem = document.getElementById('match_it');
    canvasHeight = guessWordsElem.offsetHeight - 10;
    let cnv = createCanvas(windowWidth, canvasHeight);
    cnv.parent('match_it'); // Assign the canvas to the container
    cnv.style('width', '100%');
    cnv.style('height', '100%');
  
    rectWidth = width / 4 - rectMargin + 20;

    // Initialize level rectangles
    for (let i = 0; i < levelLabels.length; i++) {
        levelRects.push({
        x: rectMargin,
        y: rectMargin + i * (buttonHeight + rectMargin + 30) + 50,
        w: rectWidth / 2 - rectMargin,
        h: buttonHeight,
        label: levelLabels[i]
        });
    }

    // Automatically select and display Level 1 sentences
    prepareSentences("Level 1");

}
  
function draw() {
    background(240);
    drawLevelButtons();
    drawSentences();

}

function drawSentences() {

    textFont("Arial");
    for (let sentencesRect of sentencesRects) {
        fill(sentencesRect.matched ? '#fff' : '#f0f0f0');
        stroke('#000');
        rect(sentencesRect.x + 300, sentencesRect.y, sentencesRect.w, sentencesRect.h, 10);

        fill(0);
        noStroke();
        text(sentencesRect.text, sentencesRect.x + sentencesRect.w / 2 + 300, sentencesRect.y + sentencesRect.h / 2);
    }
    textFont("Rocher");
}


function prepareSentences(level) {
    // Reset sentencesRects for new level
    sentencesRects = [];

    // Get keys of the Urdu sentences for the level
    let urduKeys = Object.keys(levels[level].urdu);

    // Randomly select 5 keys
    let selectedKeys = shuffleArray(urduKeys).slice(0, 5);

    // Retrieve the corresponding Urdu and Swedish sentences
    let selectedUrdu = selectedKeys.map(key => levels[level].urdu[key]);
    let selectedSwedish = selectedKeys.map(key => levels[level].swedish[key]);

    // Combine and shuffle the sentences
    let combinedSentences = [];
    for (let i = 0; i < selectedKeys.length; i++) {
        combinedSentences.push(selectedUrdu[i]);
        combinedSentences.push(selectedSwedish[i]);
    }

    // Shuffle the combined sentences array
    shuffleArray(combinedSentences);

    // Place them alternately to avoid adjacent translations
    let urduIndex = 0;
    let swedishIndex = 0;
    for (let i = 0; i < combinedSentences.length; i++) {
        let isUrdu = selectedUrdu.includes(combinedSentences[i]);
        if (isUrdu && urduIndex < 5) {
            sentencesRects.push({
                text: combinedSentences[i],
                x: rectMargin,
                y: urduIndex * (rectHeight + rectMargin) + 100,
                w: rectWidth,
                h: rectHeight,
                isUrdu: true,
                matched: false
            });
            urduIndex++;
        } else if (!isUrdu && swedishIndex < 5) {
            sentencesRects.push({
                text: combinedSentences[i],
                x: width / 2,
                y: swedishIndex * (rectHeight + rectMargin) + 100,
                w: rectWidth,
                h: rectHeight,
                isUrdu: false,
                matched: false
            });
            swedishIndex++;
        }
    }
}



// Adjust the shuffleArray function to return the shuffled array
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array; // Return the shuffled array
}

function drawLevelButtons() {
    for (let i = 0; i < levelRects.length; i++) {
      let level_rect = levelRects[i];
      fill('#1CB0F6'); // Highlight selected
      noStroke();
      rect(level_rect.x + 30, level_rect.y, level_rect.w - 50, level_rect.h + 10, 20); // Draw the rectangle
  
      fill(0);
      textSize(textSizeValue);
      textAlign(CENTER, CENTER);
      text(level_rect.label, level_rect.x + level_rect.w / 2 + 5, level_rect.y + level_rect.h / 2 + 5); // Draw the label
    }
  }


function checkMatch(urduRect, swedishRect) {
    let urduIndex = Object.values(levels[selectedCategory].urdu).indexOf(urduRect.text);
    let swedishIndex = Object.values(levels[selectedCategory].swedish).indexOf(swedishRect.text);

    if (urduIndex === swedishIndex) {
        urduRect.matched = true;
        swedishRect.matched = true;
    } else {
        urduRect.matched = true;
        swedishRect.matched = true;
        setTimeout(() => {
            urduRect.matched = false;
            swedishRect.matched = false;
        }, matchTimeout);
    }
}


// This should be called when the page loads and when a new level is selected
function changeLevel(level) {
    selectedCategory = level;
    prepareSentences(level); // Prepare sentences for the selected level
    draw(); // Redraw the canvas to show the new sentences
}



function mousePressed() {

    // Check if level rectangles are clicked
    for (let i = 0; i < levelRects.length; i++) {
        let levelRect = levelRects[i];
        if (mouseX > levelRect.x && mouseX < levelRect.x + levelRect.w && mouseY > levelRect.y && mouseY < levelRect.y + levelRect.h) {
            changeLevel(levelRect.label);
            return; // Exit the loop and function if a level is clicked
        }
    }

    // Check if sentence rectangles are clicked
    for (let sentenceRect of sentencesRects) {
        if (mouseX > sentenceRect.x && mouseX < sentenceRect.x + sentenceRect.w && mouseY > sentenceRect.y && mouseY < sentenceRect.y + sentenceRect.h) {
            if (sentenceRect.isUrdu) {
                if (selectedUrduRect) selectedUrduRect.matched = false; // Reset previous selection
                selectedUrduRect = sentenceRect;
            } else {
                selectedSwedishRect = sentenceRect;
            }

            if (selectedUrduRect && selectedSwedishRect) {
                checkMatch(selectedUrduRect, selectedSwedishRect);
                selectedUrduRect = null;
                selectedSwedishRect = null;
            }
            break;
        }
    }

}
  




