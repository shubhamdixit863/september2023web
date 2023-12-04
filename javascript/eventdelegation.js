// event delegation and event bubbling js 
const list=document.getElementById("list");

document.body.addEventListener("click",(event)=>{
    console.log(event.target);

})

list.addEventListener("click",(event)=>{
    console.log(event.target);

})

let count=1;
document.getElementById("btn").addEventListener("click",function(){
  
    const element=document.createElement("li");
    element.innerText=count;
    list.appendChild(element)
    count++;

})

// event bubbling is the process that happens in the browser automatically in which any dom event bubbles up to the parent elements
// event delegation is the process in which instead of listening for the events on the child elements we listen for the events on parent elemnent

