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