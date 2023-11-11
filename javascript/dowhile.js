function whileloop(){

let i=0;
while(i<10){
    console.log(i);

    i++;
}

}

function dowhileloop(){

    // do while loop execute atleast once in the code 
    // because the do section is executed before the condition is checked
    var i=1;
  
    do{
        console.log("thisss----")

        i++;
    }
   
    while(i<10)  // in do while loop the do block holds all the instructions to execute 
    // and while is just there for checking the condition ,it doesnt hold any instruction to execute
    
    }

//dowhileloop();

function InfiniteLoop(){
   // we use break statement to exit the loop

   // you put break statement inside the loop 
let i=0;

// infinite loop
    while(true){
        console.log(" I am an infinite loop")  // run
        if(i>100){
            break;
        }
// ------->the value of i is 100
        i++;  
    }

    console.log("Loop exited will happen");

}

//InfiniteLoop()

// 0 -100


///


function continueloop(){

//what continue statement does it abaondons(skips) the current iteration and move to the next iteration


    for(let i=0;i<10;i++){

        if(i>5){
           /// continue;
           continue;  // this continue wont let the other instruction inside the loop execute

        }

       // 0 ,1,2,3,4,5 

     console.log("For loop executing")

    }


}

continueloop()


// Question
// Write a js function that iterates through the number 1 to 50 using for loop
// for each iteration if the number is even print the number and if the number is odd
// continue and skip the printing

// Write a function that checks for the prime number between 151 to 261 and it breaks when the first prime number is
// encountered

function Printeven(){
    for(let i=1;i<=50;i++){
        if(i%2==1){
            continue;
        }

        console.log("Its even",i)
    }

}

Printeven()

function CheckPrime(num){ // num=13

    if (num==1){
      return false;
    }
    for(let i=2;i<num;i++){
      if(num%i==0){
        // there exists an i  that completely divides num
        return false; // so whenever or whereever the return statement is encountered the function will stop executing
        }
      }
  return true;
    // returns a boolean value
  }

  function PrintNumbers(){
    for(let i=150;i<261;i++){

        if(CheckPrime(i)){
            console.log(i)
            break;
        }

    }
  }
  PrintNumbers();