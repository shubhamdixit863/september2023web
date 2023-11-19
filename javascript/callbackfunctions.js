function foo(c){ // c is a parameter
    console.log(c); 
   }
   
   //foo(9);  // 9 is an argument 
   
   let c=function(){
     
   }
   
   foo(c);  // c is a callback function
   
   // A callback function is a function that is passed as an argument to another function -->
   
   foo(function(){
     // callback function 
   });  


   /// 19 -11-2023


   function foo(parameter){
    parameter();
 }
 
 
 foo(   function parameter(){
      console.log("the callback");
   
 }      )
 
 // internally whathappens  --->
 /** 
 [
    parameter=function parameter(){
      console.log("the callback");
   
 }  
 
 
 ]
 
 */
 
 // function definition
 function bar(c){  //parameter
   console.log(c);  // it will print 9
 
  console.log( c*2)// what it will print?
 }
 
 // function call
 bar(9);  // 9 is an argument
 
 function gh( p){  //parameter
   p();  // 89
 }
 let y=function(){
     console.log(89);
   }
 gh( y)
 
 let callback=function(){
   console.log(90);
 }
 
 callback();
 
 function func(a,b,callback){
   let c=a*b;
   callback(c);
 }
 
 func(4,5,function(num){
   console.log("Product",num);
 });
 
 /** 
 
 
 1. **Basic Callback Usage**:
    Define a function `processData` that takes two arguments: a number and a callback function. This function should call the callback function with the square of the number. Write another function `printResult` that takes a number and prints it. Demonstrate how to use `processData` with `printResult` as a callback.*/
 
 
 function processData(num,cb){
   cb(num**2)  // num*num
   
 }
 
 function printResult(num){
   console.log(num);
 }
 processData(7,printResult)
 
 
 // function definition
 function gk( a,b,callback){
   //console.log("Arg----",callback);
   callback(78);
   
 }
 
 gk(4,5, function(pr){
   console.log(pr);
 }    )
 
 
 /*
 let c={
   f:function(){
       console.log(9);
   }
 }
 
 
 function io(f){
     f();
 }
 
 io(c.f);
 */
 
 
 function processData(a, square){
      let square2 = a*a;
     square(square2)
 }
 
 processData(9,function printResult(a){
     console.log(a)
 })