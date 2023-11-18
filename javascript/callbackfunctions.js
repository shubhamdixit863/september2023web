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