// slice ,splice ,spread operator ,rest operator 
// forEach ,map ,reduce ,filter 
// split ,join ,push ,pop ,shift ,unshift
//find ,sort ,includes ,indexOf
// concat,some and every 
// Object.keys and Object.values and Object.entries

// forEach -->  Array.prototype
// es5 function
function foo(){

}

// es6 function / arrow function
const fg=()=>{

}

let arr=[1,2,3,4];
let ret=arr.forEach((ele,i)=>{

    console.log(ele,i);

})

console.log("Returned forach",ret);


// My forEach

Array.prototype.forEachBeta=function(  cb  ){

    for(let i=0;i<this.length;i++){
        cb(this[i],i);  // this is the object on which the forEachBeta would be called
    }

}

arr.forEachBeta((ele,i)=>{
   console.log("My forEach beta element",ele,i);
})


// map  ,it returns an array
// map function is generally used to modify the elements of an existing array
// and the number of elements returned are always same as in original array

let mp=arr.map(function(ele,index){

    //console.log("Map",ele,index);
    return ele*2;

})
console.log(mp);


let strArr=["a","b","c","d"];
let r=[];
for(let i=0;i<strArr.length;i++){
   r.push( strArr[i].toLocaleUpperCase());
}
console.log("Updated array",r);
/*
let updatedArr=strArr.map((ele)=>{
    return ele.toLocaleUpperCase()
})
*/
let updatedArr=strArr.map(ele=>ele.toLocaleUpperCase())
console.log("updated arr",updatedArr);