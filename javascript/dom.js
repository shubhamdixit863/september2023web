// A global object is the object that is present in browser by default and we can use it without creating
// A gloabl variable is a variable that is accessible around the whole script or whole js file in all the scopes

// A global object can have a global variable attached to it if the variable defined with var

///var c=9; // it gets attached to the global object


// What we do in dom 
// Dom is a whole html page converted to js object ,it has multiple elements
// Now what we do is we select one or multiple element and can change their properties like color
// height ,width ,font ,thats all what dom interaction in js is for
// and why we need to change the properties ,to make our web page interactive
// because html creates skelton ,css beautifies it or does its make up but only js can make it inteactive


// Selecting elements from Dom Object 

// How we select the element from the dom object
//there are 4 ways of selecting elements
// 1- selecting by id  
// 2- selecting by class 
// 3- selecting by tag 
// 4- selecting by query 

// Selecting by id // will select only one element (or first element from top if you wrongly added multiple elements with same id) 
let element=document.getElementById("heading");  // selecting the element
let element2=document.getElementById("demo");  // selecting the element


// Once we have the element we can change its properties 
//style -- css 

element.style.color="brown";
// text -- innerText
element.innerText="Do it Now !!"
// html -- innerHTML
element.innerHTML="<span>Hey there !!!</span>"  // Difference between innerHTML and innerText  and textContent


let mydivElement=document.getElementById("mydiv");
console.log(mydivElement.innerHTML);  // will get you the html 
console.log(mydivElement.innerText);  // will get you the text data only ,it wont return you the white space
console.log(mydivElement.textContent);  // will get you the text data along with the whitespaces as well if they exist