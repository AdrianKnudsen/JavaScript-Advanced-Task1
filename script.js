
const officeQuotes = [ 
    
    `"And i knew exactly what to do. but in a much more real sense, i had no idea what to do." - Michael Scott` ,

    `"Sometimes i'll start a sentence and i don't even know where it's going. i just hope i find it along the way." - Michael Scott`,
    
    `"I talk a lot, so i've learned to tune myself out." - Kelly Kapoor`,
    
    `"Would i rather be feared or loved? easy. both. i want people to be afraid of how much they love me." - Michael Scott`,
    
    `"I'm not superstitious, but i am a little stitious." - Michael Scott`,
    
    `"No, rose, they are not breathing. And they have no arms or legs… where are they? you know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?" - Michael Scott`,
    
    `"I am running away from my responsibilities. and it feels good." - Michael Scott`,
    
    `"And i knew exactly what to do. but in a much more real sense, i had no idea what to do." - Michael Scott`,
    
    `"Identity theft is not a joke, jim! millions of families suffer every year." - Dwight Schrute`,
    
    `"I'm such a perfectionist that i'd kinda rather not do it at all than do a crappy version." - Ryan Howard`,
    
    `"I'm an early bird and i'm a night owl. so i'm wise and i have worms." - Michael Scott`,
    
    `"Me think, why waste time say lot word when few word do trick." - Kevin Malone`,
    
    `"Powerpoints are the peacocks of the business world; all show, no meat." - Dwight Schrute`

    ];

   

const displayQuoteButton = document.querySelector("#displayQuote");
const clearQuotesButton = document.querySelector("#clearQuotes");
const quoteBox = document.querySelector("#quoteBox");

function displaySingleQuote() {

    if (officeQuotes.length > 0) {
        const quote = officeQuotes.shift();

        const paragraph = document.createElement("p");
        paragraph.textContent = quote;

        quoteBox.appendChild(paragraph);

    } else {
        quoteBox.textContent = "No more quotes. :("
    }
}

function clearAllQuotes() {
    while (quoteBox.firstChild) {
        quoteBox.removeChild(quoteBox.firstChild);
    }
}


displayQuoteButton.addEventListener("click", displaySingleQuote);
clearQuotesButton.addEventListener("click", clearAllQuotes);