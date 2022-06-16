// => Find Prime Factors of number and store it into an Array

// const isPrime = (n) => {
//    for(let i = 2; i <= n/2; i++){
//       if(n % i === 0){
//          return false;
//       }
//    };
//    return true;
// };
// const findPrimeFactors = num => {
//    const res = num % 2 === 0 ? [2] : [];
//    let start = 3;
//    while(start <= num){
//       if(num % start === 0){
//          if(isPrime(start)){
//             res.push(start);
//          };
//       };
//       start++;
//    };
//    return res;
// };
// let num=16;
// console.log(">> Prime Factors of "+num+" : ",findPrimeFactors(num));

//Function to find prime Factors of Number
function primeFactors(n){
    divisor = 2;
    while(n>=2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
      //contains duplicates, you should Array.prototype.filter() them out
    return factors;
}

//function call
var factors = [];
let result=primeFactors(100);
// creating array to avoid duplicate array
let UniqueFactArray = [...new Set(factors)];    
console.log(">> Prime Factors ",UniqueFactArray);
