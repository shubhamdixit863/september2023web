// getElementsbyclassname
// getelementsbytagname
// template literals
// arrow functions
// How to create a dynamic elements 
// delete part of todo list
// querySelector and querySlectorAll

// getelementbyID always will return single or first element

// getElementsByClassNAme

document.getElementById("btn").addEventListener("click",function(){
    // i wil change the color of heading
    const headings=document.getElementsByClassName("heading");
    const headings2=document.getElementsByClassName("heading2");
    headings2[0].style.color="brown";
    //headings.style // wont work because headings is a collection of elements not a single element

    // or access the individual elements headings[0],headings[1],headings[2],
    for(let i=0;i<headings.length;i++){
        headings[i].style.color="green";
    }

})


document.getElementById("btn2").addEventListener("click",function(){
    // i wil change the color of heading
    const headings=document.getElementsByTagName("h2");
 
    //headings.style // wont work because headings is a collection of elements not a single element

    // or access the individual elements headings[0],headings[1],headings[2],
    for(let i=0;i<headings.length;i++){
        headings[i].style.color="blue";
    }

})



// A Question here --


const btns=document.getElementsByClassName("btn");
/*
const btnsArray=[...btns]
btnsArray.forEach(()=>{

})
*/
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(event){
        console.log(event.target);
        console.log("button clicked",event.target.innerText);
        document.getElementById("input").value=document.getElementById("input").value+event.target.innerText
       // event.target.innerText=8
    })
}

// Create 5 buttons with same class name called btn ,with text as 1,2,3,4,5

// And create an input field when the button gets clicked show the button text as value on 
// the inputfield


//querySelctor and querySelctorAll
//querySelector as getElementById
// in query selctor you can pass classname ,id and tag and other complex selectors
// it will always return single or one elemenys
document.querySelector("#something").addEventListener("click",function(){
    alert("click happened");
})

// for class
document.querySelector(".btnclass").addEventListener("click",function(){
    alert("click of class button happened");
})

// for tag
document.querySelector("h1").addEventListener("click",function(){
    alert("click of heading happend");
})