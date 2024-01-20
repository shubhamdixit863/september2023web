// iterative way 

function factorial(n){

     let fact=1;

     for(let i=n;i>0;i--){
        fact=fact*i;
     }
return fact;

}

console.log(factorial(5));


// recursive

function f(n){

    if(n==1){
        return 1;  // we are not returning a function call ,instead we are returning a real value
    }


  return f(n-1)*n 
}

f(5);



//console.log(f2(5));

// You have to write a function to calculate the nth fibonacci number using recursion
// Calculate the nth fibonacci number

// 1,2,3,5,8,13

// try to make it efficient by doing memoization
function fibonacci(n){
if(n<=1){
    return 1
}
    return  fibonacci(n-1)+fibonacci(n-2);

}
console.log(fibonacci(50))