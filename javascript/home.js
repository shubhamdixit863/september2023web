// variables are needed to store data of our problem
// there are three keywords(some predefined word by the languages) which you can  you can use to create variables in js
// var ,let and const
// A variable has thre important things
// Syntax ---> keyword variableName =value to be stored
//shantanu 10000 , 10% interest per year ,i want to calc interest -shubham
// variable name can be problem specific
let uuuu=0; // global varaible
/*
var borrower="Shantanu"; // what this line means -- is  to store shantanu string in borrower variable
var lender="Shubham";
var amountBorowed=10000;
var timeForLending="one year";
var rateOfInterest="10%";
*/


// use let as much as you can
/*
let  borrower="Shantanu";
let lender="Shubham";
let amountBorowed=10000;
let timeForLending="one year";
let rateOfInterest="10%";

*/
/*
const  borrower="Shantanu";
const lender="Shubham";
const amountBorowed=10000;
const timeForLending="one year";
const rateOfInterest="10%";
*/

// var borrower="Shantanu";  const  borrower="Shantanu";let  borrower="Shantanu"; -->these whole lines are called variables
// var ,let ,const -->keywords
// borrower ,lender ,rateOfInteres -->identifiers (variable names)

// Rules for  variable declaration
// 1- names cannot start from numbers ,but you can use number in between
//var 2344  -->invalid
// 2  & | #  - +  * / @  -->you cannot  start variable from them  because these are operators in js
// 3 -you are not allowed to use keywords as variable names
// you are not all











// Datatypes define the type of information or data you are representing
// Primitive Data types in js (because they are in the language by default)
//numbers -int ,float ,decimal ,long (other languages) in js we have only numbers
//true false -->boolean
////text data -->string
//// Symbols  -->
// BigInt -->it is used to store big numbers

// null and undefined (you can call them as absence of any real values)

// User Defined Data types (// Objects  ) these are created from primitive data types
//Arrays ,classes ,hashmap ,object literal 

// date
// time
//// location
//// //audio // drawings //videos // images  -->binary data
// colors


/// Function  definition

function  FunctionName(){
    let c=9;
    let k=90;
    let z=c+k;  //sum of c and k
    console.log(z);
    // I
}

// function calling 

FunctionName()



function CalulateInterest(parameters){
    const  borrower="Shantanu";
const lender="Shubham";
const amountBorowed=10000;
const timeForLending="one year";
const rateOfInterest="10%";
console.log("Ineterest calculated");  //simple printing we are 
return 9;
}

CalulateInterest();

// Function are used to encapsulate the problem logic in an isolated environment


// Write a function the prints out the sum of two numbers

// function definition
function Sum(){
   let a=9;
   let b=10;
   let sum=a+b;
   console.log(sum) // prints to the browser console
}

Sum() ; // function call 
// Write a function the prints out the difference o of two numbers

function Subtract(){
    let a=9;
    let b=10;
    let difference=b-a;
    console.log(difference)
    // there is a hidden return statement automatically added by a compiler ,it returns undefined
    // by default function returns undefined
 }

 Subtract();

 // function parameters and returns values
 function Sum(a,b){ //parameters are variables that you put in definition
   
    let sum=a+b;
    console.log(sum) // prints to the browser console
 }
 console.log("heyyyy----",Sum(8,9))

// When we call the function then only the instructions inside the function gets executed
Sum(23,7); // 23,7 are known as arguments
 Sum(23,70);  // 23 ,70 are arguments ,arguments are values ---->
 //let age=prompt("Please enter your age");
 //console.log("Users age",age)

 // Return statement

 function SumReturn(a,b){ //parameters are variables that you put in definition
   
    let sum=a+b;
    return sum; // should be the last statement ,and once return statement there function executio stop

///  --->no further code is executed
}

 let sumReturned=SumReturn(7,9);  // we are storing the value returned from SumReturn() into a variable
 Sum(23,7);
 console.log("Returned sum is",sumReturned);

 console.log("Returned sum is", SumReturn(70,9));
 //alert(SumReturn(70,9))

 function foo(){

    function bar(){
         return "hello";
    }
   const c= bar();
   return c;

 }

 console.log(foo())