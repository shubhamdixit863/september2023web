console.log(1);


// setTimeout 

// it would be executed asynchronously
setTimeout(()=>{
   console.log(" hey there !!")
},5000)

let arr=[1,2,2,23,9];
console.log(
    arr.map(ele=>ele*2)
)

console.log(0);

// 40 minutes

// You have to cook the breakfast  -20 minutes
// you have to bath  -5 min
// you have to iron your clothes -5 min
// you have to pack your bag -5 min
// reaching office 10 min

// 8 am --->8:15 --->8:20 -->8:22 -->reach office -->8:32



/*
// map ,filter ,forEach  --->higher order function


function foo(){
  setTimeout(function(){
      bar()
  },1000)


  console.log("foo")
}


function bar(){
  console.log("bar");
}

bar();  // sync 

setTimeout(function(){
    foo();
},1000)


console.log("hello world");  // sync
bar
hello world
foo
bar
*/
/*

const interval=setInterval(function(){
  console.log(8);
},1000)


setTimeout(()=>{
  clearInterval(interval);  // it just finishes the setInterval
},5000)
*/

function foo(){
    setInterval(function(){
      console.log("hey there");
    },2000)
  
    console.log("foo")
  }
  
  
  foo();
  
  setTimeout(()=>{
    console.log("hey i will be in between .....")
  },5000)
  
  
  console.log(8);
  
  //hey there ,8,hey there ,hey there,hey there,hey there,hey i will be in between .....,