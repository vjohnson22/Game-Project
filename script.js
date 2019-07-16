// // game button logic
// easy game has 4 boxes, medium has 9 hard has 16. Create rray of 16 colors. 
// create empty array, and each timethe game restarts, give it random numbers up to the length of the amount of game boxes. After boxes are created an given a color, as well as a number, give that array to itself several times, then shuffle. this will be the games logic for deciding what order the boxes will flash in. 

let boxNumber = []
let boxColor = ["red", "green", "blue", "yellow", "orange","purple","teal", "cyan", "gray", "brown", "black","tan", "violet", "magenta", "turquoise", "pink"]

let main = document.querySelector('main')

// box creator,

for (let i = 0; i<4; i++){
	let box = document.createElement('div')
	box.backgroundColor = boxColor[i]
	box.position = i 
	boxNum = Math.random()
	boxNumber.push(boxNum)
	main.appendChild(box)

}

//create a box creator fiucntion to be called on button press

//need to create functionality for easy(4), medium (8) hard(12), to change the number of boxes created


// create grid classes for each box position so when they get rendered, on easy the first 4 are in the middle, then then 8 on medium are the 2 middle columns, then the last one renders it all