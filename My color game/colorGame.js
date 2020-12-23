var colors = [];
var pickedColor;
var numSquares = 6; 
var colorDisplay = document.querySelector("#colorDisplay")
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode")

init();
function init(){
	setUpModeBtn();
	setUpSquares();
	reset();
}

function setUpSquares(){
	for (var i=0; i < squares.length; i++){
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetBtn.textContent = "Play Again ?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again !!"; 
		}
	})
}

}

function setUpModeBtn(){
	for(var i=0 ; i<modeBtn.length; i++){
	modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected")
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}
}


function reset(){
	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent= "New colors"
	h1.style.backgroundColor = "steelblue"
	for(var i=0; i<squares.length ; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];  

		}
		else{
			squares[i].style.display = "none";
		}
	}

}


resetBtn.addEventListener("click",function(){
	reset();
});

// function changeColors(color){
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = color;
// 	}

// }

function pickColor(){
	var random =	Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0 ; i<num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}