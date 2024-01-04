/*var age="hello";
console.log(window.a);

function foo(){
    var a=9;
    console.log(a);
    console.log(this.a,this);
}
console.log(this);
// we are calling this function in global execution context
foo();
window.foo();
// so the value of this key word would be decided by the global execution context
// and the value of this in Global Execution Context in browser is window

// the value of this inside the function is decided 
// by the execution context of the function
var name="john"
let obj={
    name:"shubham",
    fun:function(){
        console.log("inside obj",this.name);
    }

}

obj.fun();

function io(){
    console.log("The value of this",this.a);
}

function bar(){
    // the value of this keyword inside here is window object
    var a=91;
    io();
}

bar();  // --window.bar();

// difference between arrow function  (es6) and es5 function 
// the value of this keyword in arrow function will always point to the global object

const foo1=()=>{
    console.log("In arrow",this);
}

foo1();


const j={
    age:89,
    fn:()=>{
        console.log("In j object",this.age)
    }
}

j.fn();



// call bind and apply  --function prototype methods
// they can only be called onto the function
// these methods are used to change the value of this keyword  for a function
*/
function data(arg1,arg2){
    console.log(this,arg1,arg2);
}


data();

let ob={
    data:"something"
}

// so if we want to bind the function to the obj ob such that
// the value of this inside data function becomes ob
// then we have to use call bind and apply

// bind
// bind returns a new function which is bound to the new object
let nefn=data.bind(ob);
nefn();

// call 
// it will directly call the method
data.call(ob,8,9);
// apply 
// it will also invoke the method
data.apply(ob,[8,0]);

// the difference between call and apply is 
// that call takes comma separated arguments
// and apply takes an array of arguments