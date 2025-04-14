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
	["bob","vad heter räven?","cat.jpg"],
	["grön röd gul blå orange","gitarr med fem strängar, vilka är färgerna?","guitar-hero.jpg"],
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



svarFalt.addEventListener("keypress",(x)=>{
	if(x.key === "Enter"){
		console.log("WIHIHIHIH")
	}
})

svarKnapp.addEventListener("click",(x)=>{
	let svar = svarFalt.value
	if(svar.replace(/\s/g, "").toLowerCase() === currentPass.replace(/\s/g, "")){
		console.log("rätt")
		
		if(currentRound<fragar.length){changeRound(fragar[currentRound][0], fragar[currentRound][1],fragar[currentRound][2])}
		else{infoBox.textContent = "Du VANN! Här är koden: 1234"}
	}
})


let test = "testar testar"
console.log(test.replace(/\s/g, ""))


