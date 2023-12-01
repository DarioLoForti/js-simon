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


let number = 5;
let numbers = createNumbers(number);
console.log(numbers);