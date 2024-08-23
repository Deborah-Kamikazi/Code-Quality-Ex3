const isPrime = (number) => {
    if(number<=1){return`${number} is not prime` }
    for(let i = 2; i <= Math.sqrt(number); i++){
     if (number % i === 0) {return `${number} is not prime`}}
     return` ${number} is prime `
    };