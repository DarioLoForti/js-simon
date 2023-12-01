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
console.log(numbers);

let clock = setInterval(function(){
    document.getElementById("numeri").innerText = numbers;
    if(second == 0){
        clearInterval(clock);
        document.getElementById("numeri").innerText = "";
    } 
    else{
        second--;
    }
},1000);

setTimeout(function(){
    function userPrompt(Number){
        let userNumbers = [];
    
        for(let i=1; i<=Number; i++){
            let numberUser = prompt(`inserisci il tuo ${i}° numero`);
            userNumbers.push(numberUser);
            document.getElementById("user").innerText = userNumbers;
        }
        console.log(userNumbers);
    }
    let userNumbers = userPrompt(number);
    console.log(userNumbers);
    
}, 35000);

