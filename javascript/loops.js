/*function foo(a,b){
    const sum=a+b;
    console.log(sum); // this is for printing on the console

    return sum;  // you return when you want to use the function's value outside the function

}

function Data(){
    const sum=foo(8,9)
    console.log(sum);
}

Data()
*/

//console.log(9);
//console.log(9);
//console.log(9);
//console.log(9);
//console.log(9);
//console.log(9);
//console.log(9);

// loop is designed to repeat the process or repeat the instructions  multiple times

// For loop 
// While loop 
// Do while loop

// forEach-->higher Order js function

// For loop 
// three important things for a loop 
// 1- from where it starts
// 2- how it reaches from start to end
// 3- at where it ends

// My task is I want to print the console.log 9 times
// the most basic approach that you will find in the loops is the arithmtetic
// 1 ,2,3,4,5,6,7,8,9,10

// I have to keep the track of counting 

for (let i=1;i<=10;i=i+1){  // so when this condition i<=10 becomes false then our loop gets exited
    // the logic or the code that you want to repeat will go 

    console.log("9");
    console.log("\n")  ;// its a new line character that prints extra line

}

// Write a function that prints all odd numbers between 1 to 100
// write a function that prints all even numbers between 1 to 100
// With the help of loop you have to print every even number  between 1 and 100
// With the help of loop you have to print every odd number between 1 and 100

// default parameters  --->


function EvenNumber(){
    for(let i=1;i<=100;i++){  // i++ -->post increment --> // pre increment ++i
       if(i%2==0){
        console.log(i);

       }
    }
}

function OddNumber(){
    for(let i=1;i<=100;i++){  // i++ -->post increment --> // pre increment ++i
       if(i%2==1){
        console.log(i);

       }
    }
}

let i=0;

for( i=1;i<=100;i++){  // i++ -->post increment --> // pre increment ++i
    if(i%2==1){
     console.log(i);

    }
 }
 console.log("The value of i once teh loop is over",i);

 //let i=1;  -->initialization  // -->only once // this is the first step when the loop starts
 // i<=100  -->conditional checking part  --- // second step is checked
 // If the condtional step is checked as true then the logic inside the loop gets executed


 // i++  --->evaluation part (incrementing part) // after the logic is executed then the incrementing part happens

 // You have to print all prime numbers between 1 to 100
 // Write a function that prints all the prime numbers between 1 to 100
 // A prime number is the number that is completely divisble by itself or 1 

 
 function CheckPrime(num){
    let isPrime=true;
    for(let i=2;i<num;i++){
        if(num%i==0){
            // this condition should not executed
            isPrime=false;
        }

    }

return isPrime;
 }




 function foo(){
// This loop is printing all the even numbers
for( let i=1;i<=100;i++){  // i++ -->post increment --> // pre increment ++i
    if(i%2==1){
     console.log(i);

    }
 }
 let j=1;  // this happens only once
 while(j<=100){  // this happens multiple times
    if(j%2==1){
        console.log("Printing from while loop",j);
   
       }
    j++  // multiple times
 }
 }


 // Default paramters

 function bar(num="hello"){  // default args
    console.log("Nummm---",num)
 }
 bar();

 // default values are used when you dont pass any args in the function 