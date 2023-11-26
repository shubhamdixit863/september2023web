const button=document.getElementById("button");

// event will emit no matter if you have the listener with you or not 
// if you have the listener attached you can listen to the events and do some kind of job
button.addEventListener("click",function(){
    document.getElementById("heading").style.color="green";
    if(document.getElementById("heading").style.fontFamily!="Ephesis"){
        document.getElementById("heading").style.fontFamily="Ephesis";

    }else{
        document.getElementById("heading").style.fontFamily="";

    }
   

   // document.write("hey there")
  // document.getElementById("heading").style="color:green;font-family:Georgia, serif"


    console.log("button clicked");
})

button.addEventListener("mouseover",function(){
    console.log("mouseover heppned");
})

//button.addEventListener("")

// Create a button that changes the font family of a heading when clicked 