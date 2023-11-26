const button=document.getElementById("button");

// event will emit no matter if you have the listener with you or not 
// if you have the listener attached you can listen to the events and do some kind of job
button.addEventListener("click",function(){
    document.getElementById("heading").style.color="pink";
    console.log("button clicked");
})

button.addEventListener("mouseover",function(){
    console.log("mouseover heppned");
})