const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passwordLength = 12

function randomChar(){
    let randomIndex = Math.floor(Math.random()*characters.length)
    return characters[randomIndex]
}
let pass1 = document.querySelector("#firstPassword")
let pass2 = document.querySelector("#secondPassword")

function generateRandomPassword(){
    let password1 = ""
    let password2 = ""
    for( let i = 0; i < passwordLength; i++){
        password1 += randomChar()
        password2 += randomChar()
        
        pass1.textContent = password1
        pass2.textContent = password2
    }
}
function resetValues(){
    pass1.textContent = ""
    pass2.textContent = ""
}
