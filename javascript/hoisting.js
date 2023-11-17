let ck=9;

// when the variable is actually stored in the memory
// it is stored into three separate stages
// declaration

//  initialization
// assignment
// effects of hoisting 

// in var 
console.log(c);
var c=9;
console.log(c);

//console.log(y);
let y=7;
//console.log(j);


const j=88;



foo()
function foo(){
  console.log(90);
}

f(); // whether it will work or not?

// in this case let is hoisted
// not the function
let f=function  (){
  console.log(8);
}

  f();

/**
 * 
 * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
 */