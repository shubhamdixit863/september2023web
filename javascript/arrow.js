function foo(name){

    return 9
}

// arrow function is a function introduced in es6 ,it has concise syntax as compared to regular
//function
let fun=(name)=>{

    return 10;
}

console.log(fun());


const d=()=>"name"  // if the arrow function doesnt have the curly brackets and the return keyword
//then whatever its written on the right handside is automatically returned
console.log(d());

const sum=(a,b)=>a+b;

console.log("Sum",sum(8,9))
