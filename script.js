console.log("Eyooo")
let board = document.querySelector(".board")
let infoBox = document.querySelector(".info-box")
let svarFalt = document.querySelector(".svar")
let svarKnapp = document.querySelector(".svar-knapp")
let bild = document.querySelector(".bild")

console.log(bild.src)


let currentPass = ""
let currentRound = 0
let currentQuestion = ""
let currentPicture = ""

let fragar = [
	["grön röd gul blå orange","gitarr med fem strängar, vilka är färgerna?","guitar-hero.jpg"],
	["bob","vad heter räven?","cat.jpg"],
	["levis","Vad heter Niklas hund?","cat.jpg"],
	["4","2+2","cat.jpg"]]


function changeRound(svar, fraga, picture) {
	currentPass = svar
	currentQuestion = fraga
	currentPicture = bild
	currentRound = currentRound + 1

	infoBox.textContent = currentQuestion
	bild.src = picture

	svarFalt.value = ""
	

	console.log(currentRound)
}

changeRound(fragar[currentRound][0], fragar[currentRound][1],fragar[currentRound][2])

svarKnapp.addEventListener("click",(x)=>{
	let svar = svarFalt.value
	if(svar === currentPass){
		console.log("rätt")
		
		if(currentRound<fragar.length){changeRound(fragar[currentRound][0], fragar[currentRound][1],fragar[currentRound][2])}
		else{infoBox.textContent = "Du VANN! Här är koden: 1234"}
	}
})



