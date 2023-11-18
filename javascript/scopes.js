
// functional scope


function foo(){
    /// functional scope
    var c=9;
    let d=8;
    const k=80;
    console.log(c);
    console.log(d,k);
  }
  //foo()
  
  //console.log(c);
  //console.log(d,k);
  
  // any variable declared with let ,var and const cannot be accessed outside the function 
  
  
  
  // block scope 
  // The curly bracket as you see below is called as block or block scope ,moreover anything which is accompanied with it including if ,else ,else if for ,while etc except function can also be considered as block scope
  /*
  {
  let a=9;
  };
  if (true){
    
  }
  else{
    
  };
  
  for(;;){
    
  };
  while(true){
    
  }
  */
  // let and const have block scope
  if (true){
    const f=8;
    var v=78; // var has a functional scope so it can be accesed outside the block scope
  }
  console.log(v);
  
  function bar(){
    var f=9;
    let h=67;
    const k=4;
    
  }
  //console.log(k);
  //console.log(h);
  
  //{var d=9} console.log(d)
  
  // local scope vs global scope 
  {
    // anything between these curly brackets
    // is called as local scope
  }
  
  for(let i=0;i<10;i++){
    var c=9;// local variable
    let g=8; // local variable
    //const g=89;  // local variables
  }
  
  function beta(){
     let k=9;
    function gama(){
      let b=8;
  
      if(true){
        let h=9;  // local variable 
      }
      
    }
  }
  
  // Global variable is a variable which you can access in all the scopes ,it is accessible from anywhere in the code ,it is not restricted to any particular scope.
  // global and local scopes are universa; scope
  var f=9;
  // var ,let and const  --->these keywords define the block or functional scope
  
  function foo2(){
  
    if(true){
      let c=9;
      var d=8;
      const e=7;
      console.log(c);
      console.log(d);
      console.log(e);
  
      if(true){
        const e=7;
        let h=7;
        var t=790;
      } 
     // console.log(e); // not accesible
      //console.log(h);    // not accesible 
      console.log(t);
    }
    console.log(d);
    console.log(t);
  }
  foo2();
  
  
  function fooi(){
    // block scope
    let g=9;
    const u=0
  }
  // they are not valid here --->



  // gloabal variables
// Global variable is a variable which you can access in all the scopes ,it is accessible from anywhere in the code ,it is not restricted to any particular scope.
//var g=80;
//let c=9;
//const h=99;

// global variables should be defined at the top of the script such that they can be accessible from anywhere in your script

var g=80;
let c=9;
const h=99;

function foo(){
  console.log(g);
  console.log(c);
  console.log(h);



}

foo();
function foo2(){
  console.log(g);
  console.log(c);
  console.log(h);

  if(true){
    console.log(g);
    console.log(c);
    console.log(h);

  }
}

foo2();

  


// gloabal variables
// Global variable is a variable which you can access in all the scopes ,it is accessible from anywhere in the code ,it is not restricted to any particular scope.
//var g=80;
//let c=9;
//const h=99;

// global variables should be defined at the top of the script such that they can be accessible from anywhere in your script
/*
var g=23;
let c=9;
const h=09;

function foo(){
  var g=5
  console.log(g);
  console.log(c);
  console.log(h);
}
foo();
*/


//let  vs var
// 1- let has a block scope ,var has a functional scope
// 2- variables declared with let donot get attached to global object(window in browser) but variables declared with var do
// 3 - let cannot be re declared in a same scope but var can 


//const vs var
// 1- const has a block scope ,var has a functional scope
// 2- variables declared with const donot get attached to global object(window in browser) but variables declared with var do
// 3 - const cannot re declared in the same scope but var can 
/*
var h=9;
var h=99;

let g=89;
let g=78;  // not allowed in the same global scope
*/

function foo(){
    let g=8;
    const h=89;
    var y=9;
  
    if(true){
      let g=90;
      console.log(g);
      const h=89;
       console.log(h);
  
    }
  
    function f(){
      let g=8;
      const h=89;
  
    }
    var y=9;
  
  }
  
  foo()


  // Difference between const and let 
// 1- const cannot be reassigned but let can be re assigned

const g=9;
//g=90  // invalid 

let u=90;
u=89;

console.log(u) ;// 89



// Re declare vs re assign

var c=9;
var c=19; // re declared

c=97; // re assignment
c=89;

/** 

  var c = 89;
  c = 87;
  

  Here's what happens:

  1. **Initialization**: When you first declare `var c = 89;`, the variable `c` is initialized and assigned the value `89`.

  2. **Reassignment**: Then, `c = 87;` reassigns the value of `c` to `87`.

  Regarding the value `89`, it becomes unreferenced after the reassignment. In JavaScript, when a value no longer has any references pointing to it (like in this case, where `c` was the only reference to the value `89`), it becomes eligible for garbage collection. Garbage collection is a form of automatic memory management that the JavaScript engine performs, freeing up memory that is no longer in use. This process happens in the background and helps to ensure efficient memory use by the program.

*/