function foo(){

let a =9;
let b=8;
console.log("hello there");





}


// Ideally when the function is completed and returns
// the local variables inside the function are removed from the memory
// but when we return a function from the function 
// the inner function have access to the  outer variables
// even when the outer function has completed its execution
// that is possible because of closures
// closure is the combination of functions inner scope (I)
// and the functions lexical scope (L);
function bar(){
    // L
    let y=9;
    let h=990;
    return function(){
        // Inner scope (I)
        console.log("from inner function",y); //2
    }
}

const f=bar();
f();