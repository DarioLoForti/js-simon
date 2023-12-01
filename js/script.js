// // creo funzione che genera numeri random

function generateRandomBomb (arrayNumbers){
    let checkNumbers = false;
    let randomNumbers ;

    while(!checkNumbers){
        randomNumbers = Math.floor(Math.random() * 100 + 1);

        if(!arrayNumbers.includes(randomNumbers)){
            checkNumbers = true
        }

    }

    return randomNumbers;
}


// creo funzione per la generazione array numeri random

function createNumbers(Number){
    let numbers = [];

    for(let i=0; i<Number; i++){
        numbers.push(generateRandomBomb(numbers));
    }
    return numbers;
}

let second = 30;
let number = 5;
let numbers = createNumbers(number);
document.getElementById("numeri").innerText = numbers;

console.log(numbers);
setTimeout(function(){
    document.getElementById("numeri").innerText = "";
},30000);

setTimeout(function(){
    let number_User = userPrompt(number);
    document.getElementById("user").innerText = number_User;
    console.log(number_User);
    console.log(numbers)

    for(let i=0; i<number_User.length; i++){
        if(numbers.includes(number_User[i])){
            console.log("esatto")
        }
        else{
            console.log("errato");
        }
    }
    
}, 32000);


// definisco array con numeri inseriti dall'utente

function userPrompt(Number){
    let userNumbers = [];

    for(let i=1; i<=Number; i++){
        let numberUser = parseInt(prompt(`inserisci il tuo ${i}° numero`));
        userNumbers.push(numberUser);
        document.getElementById("user").innerText = userNumbers;
    }
    return userNumbers;
}