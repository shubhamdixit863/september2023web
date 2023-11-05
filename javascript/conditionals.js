function Conditionals(){
    // you can have only one if condition for a logic or in a set
    if(condition){  // condition should be evaluated as boolean
        // the code that you want to execute when your condition is true
    }else if(condition2){ //condition2 should be evaluated as boolean // you can have multiple elseif condition

    }else{
        // this would be executed when any of the condition above doesn't gets executed  
    }
}



function CheckIfItsNumber2Or3(num){
    // == equality operator  2==2  -->this expression evaluates to a boolean (true or false)
    // = --->assignment operator ,let c=9; (we are assigning 9 value to c);
    // == -->equality operator ,it checks whether two values on left and right are equal or not
    // if and else if needs to have boolean value in the ()
    if(num == 2 ){ // 3==2
        console.log("Num is 2 ");

    }else if(num == 3){ // 3==3
        console.log("Num is 3 ");

    }else{
        console.log("Num is neither 2 nor 3 ");
    
    }

}
// I am calling the function
CheckIfItsNumber2Or3(2);
CheckIfItsNumber2Or3(3);
CheckIfItsNumber2Or3(30);


console.log(4==5);

console.log(41==51);  // false

console.log(1==1);


// Write a function that takes string argument ,if the string is A print Apple ,if string is B ,print
// banana ,if string is C print cat ,otherwise print I dont know
// Anything inside  ---> "c" ,'c' -->string

function CheckString(value){ // paramaters are variable in itself
    if (value=="A"){  // --> A == A -->true
        console.log("Apple")
    }else if(value=="B"){
        console.log("Banana")
    }else if(value=="C"){
        console.log("Cat")
    }else{
       console.log("I don't know");
    }

}
//let A="A";
//CheckString("A");

// modulus operator  % --->modulus operator gives you remainder
// divide 5 by 2 -->what will be the remainder

console.log("Remainder",5%2);
console.log("Remainder",89%7);

// what is an even number --->remainder 0 
console.log((4%2==0));  // a number is even or not

function checkEvenOROdd(num){
    if(num%2==0){
        console.log("Its even")
    }else{
        console.log("its odd")
    }

}

checkEvenOROdd(89);

// Fizzz buzz problem 

// You have to create a function ,that takes a number  as an argument

// if the number is completely divisible by 3 you should print fizz
// if the number is completely divisble by 5 you should print buzz
// otherwise print fizzbuzz

