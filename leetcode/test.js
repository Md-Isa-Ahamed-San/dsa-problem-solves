// @ts-nocheck



function arr(array){
    let even = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            even.push(array[i])
        }
    }

    return even;
}

let number = arr([22,34,55,68,75,65])
console.log(number);

