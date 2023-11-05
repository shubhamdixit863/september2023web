// && and || operator
// function definition
function foo(num){
    if(num%2==0){  // if the number is divisble by 2  ---> 20%2==0 --
        console.log("number divisible by 2")
    }

}
foo(20) // function call

function foo2(num){
    if(num%2==0 && num%3==0 ){  // if both  num%2==0 and num%3==0 is true  then only if condition is executed
        // here it will check that if the number is divisible by both 2 and 3
        console.log("number divisible by 2 and 3")
    }else{
        console.log("number not  divisible by 2 and 3")

    }

}

function foo3(num){
    if(num%2==0 && num%3==0 && num%5==0 ){  // if both  num%2==0 and num%3==0 and num%5==0 is true  then only if condition is executed
        // here it will check that if the number is divisible by both 2 and 3
        console.log("number divisible by 2 and 3 and 5")
    }else{
        console.log("number not  divisible by 2 and 3 and 5")

    }

}
foo2(80);
foo2(24);
foo3(30)


// Or operator


function foo4(num){
    // this if condition will run if any or both the conditions are true
    // if both are false then nothing would be executed
    if(num%2==0 || num%3==0 ){  // if any of num%2==0 ,num%3==0 is true then execute the conditon
        console.log("number divisible by 2 or 3")
    }else{
        console.log("number not  divisible by 2 or 3")

    }

}

foo4(9)
foo4(90)
foo4(91)

// Simple problem 

// Write a function that takes an argument and prints fizzz when the number  is divisible by 3
// prints bizz when the number is divisible by 5
// prints fizz buz when the number is divisible by both 3 and 5
//prints buzzfiz when the number is either divisble by 3 or 5

function Fizzbuzz(num){
    if(num%3==0 && num %5==0){
        console.log("Fizzbuzz")
    }else if(num%3==0){
        console.log("Fizz")

    }
    else if( num%5==0){
        console.log("Buzz")

    }
    else if(num%3==0 || num%5==0){
        console.log("Buzz Fizz")

    }


}

// Greater than less than operator

console.log("Result of greater than",8>7) ; // Greater than 8>7 is evaluated to a boolean value it can either be true or false
console.log("Result of lesser than",8<7) ; //Less than 8<7 is evaluated to a boolean value it can either be true or false
// > ,< ,= ,== ,&& ,|| ,% ,+ ,-  , /, * , != (not equal to operator)

// dividend (quotient)
console.log("quotient",5/2) ; // it returns 2.5 ,the quotient

// multiplication operator

console.log("Multiplication", 4 *5 );

console.log("IS",4!=3); // return true
console.log("IS",4!=4); // return false


//  ---> Write a function that checks whether the number is negative ,positive ,or zero 
// if its negative --print negative number
// if its positive -->print positibe number
// if its zero ---> print zero number

/**
 * "Write a JavaScript function that takes two 
 * numbers as input and print out the string
 * containing their sum, difference, 
 * product, quotient, and whether the 
 * first number is greater than, less than, or
 *  equal to the second number.
 *  Ensure to use arithmetic, comparison, and logical operators in your solution."
 */

function foo47(num1,num2){
    let sum=num1+num2;
    let difference=num1-num2;
    let multiplication=num1*num2;
    let division=num1/num2;
    if(num1>num2){
        console.log(sum,difference,multiplication,division,"Num 1 >Num2")
    }else{
        console.log(sum,difference,multiplication,division,"Num 1 <Num2")

    }

}
foo47(56,23)


let  data1=prompt("enter the number");  // prompt actually returns you a string 
let  data2=prompt("enter the number");  // prompt actually returns you a string 

//console.log(typeof data);

//console.log(data + data);
//console.log(Number(data)+Number(data));
//console.log(parseInt(data)+parseInt(data));
