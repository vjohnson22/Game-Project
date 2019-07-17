// // game button logic
// easy game has 4 boxes, medium has 9 hard has 16. Create rray of 16 colors. 
// create empty array, and each timethe game restarts, give it random numbers up to the length of the amount of game boxes. After boxes are created an given a color, as well as a number, give that array to itself several times, then shuffle. this will be the games logic for deciding what order the boxes will flash in. 

let boxNumber = []
let boxColor = ["red", "green", "blue", "yellow", "orange","purple","teal", "cyan", "gray", "brown", "black","tan", "violet", "magenta", "turquoise", "pink"]
let boxPosition =['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen']

let main = document.querySelector('main')

// boxes will eventually be connected to difficulty level
let boxes 

//turn counter to control logic
let turn = 0

//function creates the boxes for the game based on the difficulty, which is decides how many boxes to create. the random order for the game is also created
function initializeGame(){
	for (let i = 0; i<boxes; i++){
		let box = document.createElement('div')
		box.style.backgroundColor = boxColor[i]
		box.className = boxPosition[i] 
		// let boxNum = Math.random()
		box.id = boxColor[i]
		box.addEventListener('click', press)
		// boxNumber.push(boxNum)
		main.appendChild(box)

	}

//pushed a bunch of iterations of the boxnumbers to the box number array to create the game click logic

	for(let i = 0; i <20; i++){
		for(let k = 0; k<boxes; k++){
			boxNumber.push(Math.floor(Math.random()*boxes))
		}
	}
}



function press(){

}

//create a box creator fiucntion to be called on button press

//need to create functionality for easy(4), medium (8) hard(12), to change the number of boxes created

//start button. in this iteration it will just test to see if the functionilty of cycling through different boxes works

let startButton = document.querySelector(".start")
startButton.addEventListener("click", startGame)

function startGame(){
	let selectBox = boxPosition[boxNumber[turn]]
	let glowBox = document.querySelector(`.${selectBox}`)
	glowBox.style.backgroundColor = "white"
		turn ++
}

//added all of the buttons that control the iniatilizing of the game and the game difficulty
let difficulty = document.querySelectorAll(".difficult")

let easyButton = difficulty[1]
easyButton.addEventListener('click',easy)

let mediumButton = difficulty[2]
mediumButton.addEventListener('click',medium)

let impossibleButton = difficulty[3]
impossibleButton.addEventListener('click',impossible)

function easy(){
	boxes = 4
	initializeGame()
	
}


function medium(){
	boxes = 8
	initializeGame()
	
}

function impossible(){
	boxes = 16
	initializeGame()
	
}


// logic for quit button. deletes all the boxes and sets the turns back to zero

let inGameButtons = document.querySelectorAll(".inGame")



let quitButton = inGameButtons[1]
console.log(quitButton)

quitButton.addEventListener('click', reset)

function reset(){
	if (main.childNodes.length != 0){
		while(main.childNodes.length > 0){
			main.removeChild[main.childNodes[0]]
		}

	}
}
