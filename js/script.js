var numcircles = 6;
var colors = [];
var circles = document.querySelectorAll(".circle");
var pickedColor;
var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var modeButton = document.querySelectorAll(".mode");


//Immediately Invoked Function Expression that runs when page loads

(function(){

 SetUpButtons();
 setUpcircles();
 modeReset();

})();



//Event Listener for the Mode Buttons 

function SetUpButtons(){

	for(var i=0;i<modeButton.length;i++){

	 modeButton[i].addEventListener("click",function(){

	  modeButton[0].classList.remove("selected");
	  modeButton[1].classList.remove("selected");
	  this.classList.add("selected");
	  this.textContent === "Easy"? numcircles =3: numcircles=6;
	  modeReset();


	});

 };
};



function setUpcircles(){

for(var i=0;i<circles.length;i++){

	//adding click event listeners to circles

	circles[i].addEventListener("click", function(){

		var clickedColor =this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323"
			message.textContent ="Try Again!";
		}
	});
};

};


//function to change mode and reflects it back to the player

function modeReset(){

colors = generateRandomColors(numcircles);
pickedColor =  pickColor();
rgbDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
h1.style.backgroundColor = "steelblue";

for(var i=0;i<circles.length;i++){

	if(colors[i]){
		circles[i].style.display ="block";
		circles[i].style.backgroundColor = colors[i];	
	}
	else {

		circles[i].style.display = "none";
	}
	
	}


};



//Reset Button for the game gives choices : play again or New color 
resetButton.addEventListener("click", function(){
	modeReset();
});


//function to pick random colors out of the generated colors
 function pickColor(){

  var random = Math.floor(Math.random() * colors.length);
  return colors[random];

 }


//change colors of all circles if color is correct
 function changeColor(color){

 	for(var i=0;i<circles.length;i++){

 		circles[i].style.backgroundColor = color;
 	}
 }

//Generate Random Colors
function generateRandomColors(num){

	var arr=[];

	for(var i=0;i<num;i++){
		//get random colors and oush into array
       arr.push(randomColor());
	}
	return arr;
}


//random color generator
function randomColor(){
//pick Red from 0 - 255
var r = Math.floor(Math.random()*256);
//pick green from 0 - 255
var g = Math.floor(Math.random()*256);
//pick blue from 0 - 255
var b = Math.floor(Math.random()*256);

return "rgb(" + r +", " + g + ", " + b +")";

}

