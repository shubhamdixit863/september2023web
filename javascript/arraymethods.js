// slice ,splice ,spread operator ,rest operator 
// forEach ,map ,reduce ,filter 
// split ,join ,push ,pop ,shift ,unshift
//find ,sort ,includes ,indexOf
// concat,some and every 
// Object.keys and Object.values and Object.entries
/*
// forEach -->  Array.prototype
// es5 function
function foo(){

}

// es6 function / arrow function
const fg=()=>{

}

let arr=[1,2,3,4];
let y=[]
let ret=arr.forEach((ele,i)=>{
    //y.push(2*ele);
    console.log(ele,i);

    //return ele*2;  // return value is always ignored
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
// map function doesnt modifies the original array
// it creates a shallow copy of the original array
// shallow copy vs deep copy
/*
let updatedArr=strArr.map(ele=>ele.toLocaleUpperCase())
console.log("updated arr",updatedArr);
console.log("original arr",strArr);
*/




/// filter 

let arr=[1,2,3,4,8,10];
// we want to separate all the even numbers
// [2,4,8,10];

// push method is used to insert an element in the end inside the array 
// [  ]

let filtered=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        filtered.push(arr[i])
    }
}

console.log(filtered);

// filter method returns a new array after applying the condition 
// filter method will always return array which is equal  or less than the  length  of original array
// original array is the array on which the filter method is applied
// filtering always reqires some kind of condition to remove the elements
const returnedArray=arr.filter(function(ele,i){  // i is index of an element in array
    console.log(i);
    if(ele%2==0){
        return ele;
    }
})

//console.log("After filtering",returnedArray);

// remove the duplicates




//The indexOf() method of Array instances returns the first index at 
//which a given element can be found in the array, or -1 if it is not present.

// let arr=[1,2,3,34]  arr.indexOf(34) --->3
// arr.indexOf(99);  --> -1
// X Dont use this method  to find out the duplicates
/*
const arrayDuplicates=[1,2,3,1,2,3,3,5,5,4,7,7,7,8]
const duplicates=[];
const ret=arrayDuplicates.filter((ele)=>{
    if (duplicates.indexOf(ele)==-1){
        duplicates.push(ele);
    }
    else{
        return ele;
    }
})
*/


//slice and splice in js
//slice -creates a new array containing a portion of existing array 
let array=[1,2,3,7,8];

// --->you are going from left to right then the indexes are 0,1,2,3,4
// -->if you are going form right to left then the indexes start from -1 ,-2 ,-3,-4
//array.slice(startindex,endIndex) ; // endIndex is not included
let slc=array.slice(0,4); // it will give you all the elements with 0,1,2,3
// it returns a  new array
// it doesnt modidifies the original array
console.log("sliced array",slc);
console.log("sliced array2",array.slice(1,4));

// you can also use negative indexes with slice last elements has index of -1
console.log("negative index",array.slice(-3,-2))

console.log("negative index",array.slice(-5,-1)) // output ? 8
console.log("negative index",array.slice(-4,-2)) // 2,3
console.log("negative index",array.slice(-4,2)) // 2
// if you are omiiting the end index it will go all the way till length
console.log("negative index",array.slice(-4)) // 2,3,7,8
// this will return you the empty array because the absolute value of start index should always
//be greater than the endindex
console.log("negative index", array.slice(-1, -5));// []


