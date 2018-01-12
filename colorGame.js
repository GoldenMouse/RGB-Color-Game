var size = 6;
var offColor = "#232323";
var defaultTitleBGColor = "steelblue";
var squares = document.querySelectorAll(".square");
var rgbTitle = document.querySelector("#rgbTitle");
var message = document.querySelector("#message");
var colors = getColorArray(size);
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var pickedColor = colors[Math.floor(Math.random()*size)];

init();

function init() {
	setupButtons();
	setupSquares();
	resetGame();
}

function setupButtons() {
	resetBtn.addEventListener("click", function() {
		resetGame();
	});

	easyBtn.addEventListener("click", function() {
		size = 3;
		this.classList.add("selected");
		hardBtn.classList.remove("selected");
		resetGame();
	});

	hardBtn.addEventListener("click", function() {
		size = 6;
		this.classList.add("selected");
		easyBtn.classList.remove("selected");
		resetGame();
	});
}

function setupSquares() {
	drawSquares();

	for(var i=0; i<squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			//Correct color
			if(pickedColor === clickedColor) {
				//Correct message
				message.textContent = "Correct!";
				//Change all square to correct color
				changeSquaresColor();
				//Change h1 to correct color
				h1.style.backgroundColor = pickedColor;
				//Change reset button text
				resetBtn.textContent= "Play Again?";
			} else {
				this.style.backgroundColor = offColor;
				message.textContent = "Try Again";
			}
		});
	}
}

function resetGame() {
	//Clear message
	message.textContent = "";
	//Clear Play Again
	resetBtn.textContent = "New Game";
	//Set h1 color back to default
	//h1.style.backgroundColor = "steelblue";
	h1.style.backgroundColor = defaultTitleBGColor;
	//Reset color array
	colors = getColorArray(size);
	//Pick a new color
	pickedColor = colors[Math.floor(Math.random()*size)];
	//Change color title
	rgbTitle.textContent = pickedColor;
	//Draw new squares
	drawSquares();
}

function getRandomColor() {
	var red = Math.floor(Math.random() * 256);
	var green= Math.floor(Math.random() * 256);
	var blue= Math.floor(Math.random() * 256);
	var rgb = "rgb(" + red + ", " + blue + ", " + green + ")";

	return rgb
}

function getColorArray(size) {
	var colors = [];
	for(i=0; i<size; i++) {
		colors[i] = getRandomColor();
	}

	return colors;
}

function drawSquares() {
	for(var i=0; i<squares.length; i++) {
		//Set color of squares
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function changeSquaresColor() {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

