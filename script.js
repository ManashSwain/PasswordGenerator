// function to generate a random password 

const lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const numbers = "1234567890" ;
const chars = "!@#$%^&*()?{}[]" ;

const allChars = lowerCase + upperCase + numbers + chars ;
const generatePassword = () => {
    let password = "" ;
     while(password.length < 12){
         password  +=   allChars[Math.floor(Math.random()*allChars.length)] ;
         inputbox.value = password;
     }
}






