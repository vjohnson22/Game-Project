// // game button logic
// easy game has 4 boxes, medium has 9 hard has 16. Create rray of 16 colors. 
// create empty array, and each timethe game restarts, give it random numbers up to the length of the amount of game boxes. After boxes are created an given a color, as well as a number, give that array to itself several times, then shuffle. this will be the games logic for deciding what order the boxes will flash in. 

let boxNumber = []
let boxColor = ["red", "green", "blue", "yellow", "orange","purple","teal", "cyan", "gray", "brown", "black","tan", "violet", "magenta", "turquoise", "pink"]
let boxPosition =['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen']

let main = document.querySelector('main')

// boxes will eventually be connected to difficulty level
let boxes = 8


// box creator,

for (let i = 0; i<boxes; i++){
	let box = document.createElement('div')
	box.style.backgroundColor = boxColor[i]
	box.className = boxPosition[i] 
	boxNum = Math.random()
	box.addEventListener('click', press)
	boxNumber.push(boxNum)
	main.appendChild(box)

}
//pushed a bunch of iterations of the boxnumbers to the box number array to create the game click logic

for(let i = 0; i <3; i++){
	for(let k = 0; k<boxes; k++){
		boxNumber.push(boxNumber[k])
	}
}

// taken from shuffle link
function shuffle(boxNumber) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
console.log(boxNumber)

function press(){

}

//create a box creator fiucntion to be called on button press

//need to create functionality for easy(4), medium (8) hard(12), to change the number of boxes created


// create grid classes for each box position so when they get rendered, on easy the first 4 are in the middle, then then 8 on medium are the 2 middle columns, then the last one renders it all