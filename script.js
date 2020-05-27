var css = document.querySelector("h3");
// var color1 = document.getElementsByName("color1");
// var color2 = document.getElementsByName("color2"); 
//querySelector(".color1") class

var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var button = document.querySelector("#randomColor");

// console.log(css);
// console.log(color1);
// console.log(color2);
setGradientBackground();
setColorInformation();

//input event! ha megváltozik egy érték?
color1.addEventListener("input", onInputColorChanged);
color2.addEventListener("input", onInputColorChanged);
button.addEventListener("click", setRandomColors);

//eventlistener helyett, használhatnám a html fájlban az onclick/oninput="setGradient()" !!
//htmlnél js methodot írunk be plusz csak egy "listener" lehet!

function onInputColorChanged() {
	setGradientBackground();
	setColorInformation();
}

function setGradientBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
}

function setColorInformation(){
	//css.innerText = color1.value + " " + color2.value;
	css.textContent = body.style.background + ";";
	//csomó mindennel lehet ugyanazt állítani...
}
function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradientBackground();
	setColorInformation();
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }