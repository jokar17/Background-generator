var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var btn = document.querySelector("#random");

function gradien(){
	return body.style.background = "linear-gradient( to right, "
							+ color1.value+","
							+ color2.value+")";

}

css.textContent = gradien() + ";";

function changecolor(){

	 gradien();
css.textContent = gradien() + ";";
}

color1.addEventListener("input", changecolor);

color2.addEventListener("input", changecolor);


function gradient(){
	return body.style.background = "linear-gradient( to right, "
							+ aaa+","
							+ bbb+")";
}
btn.addEventListener("click", function(){
	aaa ="#"+ Math.floor(Math.random()*16777215).toString(16);
	bbb ="#"+ Math.floor(Math.random()*16777215).toString(16);
	gradient();
	css.textContent = gradient() + ";";
});
