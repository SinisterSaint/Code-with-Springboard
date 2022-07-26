const gameContainer = document.getElementById("game");
let stopClick = false;
let matchesFound = 0;
let card1 = null;
let card2 = null;




const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
    let counter = array.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
}
  
let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
    for (let color of colorArray) {
        // create a new div
        const newDiv = document.createElement("div");
        
        // const onclick = document.createEvent(onclick)
        newDiv.classList.add("backOfCard")
        // give it a class attribute for the value we are looping over
        newDiv.classList.add(color);
        // call a function handleCardClick when a div is clicked on
        newDiv.classList.add
        newDiv.addEventListener("click", handleCardClick);
        // append the div to the element with an id of game
        newDiv.dataset.cardColor = color;
        gameContainer.append(newDiv);
    }
}

// TODO: Implement this function!
function handleCardClick(event) {
    // you can use event.target to see which element was clicked
    
    let clickedCard = event.target
    if (clickedCard.classList.contains("backOfCard") && stopClick === false) {
        flipcard(clickedCard);
        checkForMatch(clickedCard);
        checkGameOver();
        resetCards();
        
    }
    console.log("you just clicked", event.target);

}


function flipcard(card) {
    card.classList.remove("backOfCard")
    // console.log(card)
    if (card1 === null) {
        card1 = card;
    }
    else if (card2 === null) {
        card2 = card;
    }

   

}

function checkForMatch(clickedCard) {
    
    // if (!card1 || !card2){
    // clickedCard.classList.add("backOfCard");    
    // stopClick = true;
    // card1 = card1 || clickedCard;
    // card2 = clickedCard === card1 ? null : clickedCard;
    // }

    if (!card1 || !card2 ){
        return;
    }

  

    if (card1 && card2){
        stopClick = true;

    }

    

    if (card1.dataset.cardColor === card2.dataset.cardColor){
        matchesFound += 2;
        card1.classList.remove("backOfCard");
        card2.classList.remove("backOfCard");
        card1 = null;
        card2 = null;
        stopClick = false;

    }
}

function checkGameOver() {


}

function resetCards() {
    if (!card1 || !card2 ){
        return;
    }

    if (card1.dataset !== card2.dataset){
        stopClick = false;
        return;
    }

}

createDivsForColors(shuffledColors);
