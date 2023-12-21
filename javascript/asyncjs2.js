console.log(1);
setTimeout(()=>{
   console.log("I am async")
},1000)

console.log(2);


// I will see the code
// I will figure out what async task i have   --> it will shift them to somewhere ---> (webapi)
// Because these async task take some time and we are not sure that when we gonna be getting output from them

// i will kkeep on executing other tasks ,i will run the for loop ,i will print the console log
// iw ill  do the functions

// so once the synchronous tasks are executed then what will happen
// all the asynchronous task will start executing