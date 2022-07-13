const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let generatePass = document.getElementById("password-btn")
let messageOne = document.getElementById("answer-btn1")
let messageTwo = document.getElementById("answer-btn2")

let passwordLength = 15

function getRandomCharacter() {
    let randomPass = Math.floor(Math.random() * characters.length)
    return characters[randomPass]
    
}

function gennerateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
    // const generatedPasswordOne = gennerateRandomPassword()
    // messageOne.textContent = randomPassword
    
}

function clickMeBaby() {
    messageOne.textContent = gennerateRandomPassword()
    messageTwo.textContent = gennerateRandomPassword()
}

document.querySelector('#answer-btn').onclick = function(event) {
  var a = event.target.innerHTML;
  console.log(a);

}


