

function exec() {
	var randomNumber1 = Math.floor(Math.random()*6+1);
	var randomNumber2 = Math.floor(Math.random()*6+1);

	document.querySelectorAll(".dice img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
	document.querySelectorAll(".dice img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

	if(randomNumber1 > randomNumber2){
		document.querySelector(".container h1").textContent = "Person 1 won ⛳";
	} 
	else if(randomNumber1 < randomNumber2){
		document.querySelector(".container h1").textContent = "Person 2 won 🤟";
	} 
	else {
		document.querySelector(".container h1").textContent = "Draw 😐";
	}
}	
