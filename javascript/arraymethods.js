// slice ,splice ,spread operator ,rest operator 
// forEach ,map ,reduce ,filter 
// split ,join ,push ,pop ,shift ,unshift
//find ,sort ,includes ,indexOf
// Object.keys and Object.values and Object.entries
//some and every ,reduce
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
/*
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

/*
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

**/

/*

const arr2=[1,2,3,4,5];
const fil=arr2.map(function(ele,i){
    return ele*2;

})

console.log("final array",fil);


const stringArr=["a","b","c","d"];
console.log(
   
    stringArr.map((ele)=>{
        return ele.toLocaleUpperCase();
    })

)
const words=["apple","applebee","cat","dog","anaconda"];

console.log(

    words.filter((ele)=>{
        if(ele.startsWith("a")){
            return ele;
        }

    })


)

// You have an array and you want to apply some operation or some logic or some modification on individual
// items ,in that case use map function
*/
/*
// splice 
// const arr=[1,2,3,5] ; arr.splice(startIndex,deleteCount ,item1 ,item2 ,...)
const arr=[2,3,4,5,6,7];
const retArr=arr.splice(0,3);
console.log("Returned",retArr);
console.log("original arr",arr);

// Purpose --change the contents of original array by removing the items
// returns an array containing the deleted items
const arr2=["a","b",1,2];
const c=arr2.splice(-3,2);
console.log("returned array",c); // [b,1]
console.log("original array",arr2);// [a,2]

const arr3=[78,9,7,1,2,3,4,8,9,10,77,12,67,89,98];
const rety7=arr3.splice(-7,4);  ///  [9,10,77,12];
console.log(arr3[3]);// undefined
console.log(rety7);
console.log(arr3);
*/

// ... when accompnied with array ,object or string or map or
///Set can be considered as 
//spread operator
/*
const d = [3, 4, 4, 6, 7];
console.log(d);
console.log(...d)

// Creating a new array from existing using spread operator

const f = [...d];
console.log("f", f);

// strings with spread opertaor

function foo() {
    return "hello world"
}
const st = "hey there ,how are you !";
console.log(...st);

//console.log(...foo());

// Set is another datastructure in js which is used to store unique items
// How to remove duplicates from an array using set
const duplicate = [7, 7, 7, 8, 9, 0, 1]
const set = new Set(duplicate);
console.log("set", set);

// I want an array with unique elements
// in below line items of set will be unpacked and they would be stored in the 
// array 
const unique = [...set];
console.log("Unique elements", unique);


// spread operator with objects

let obj = { name: "john", age: 23, city: "Delhi" }

// you can copy the object in a new object using spread operator

let c={...obj}; // copying (shallow copy)
console.log(c);

// we want to update some field of an object
let d1={...c,city:"Mumbai"};
// In objects every key should be unique 
console.log(d1);
*/
/*
let d1= { name: "john", age: 23, city: "Delhi" }
let gh=d1;
console.log(gh);
gh.name="paul";
console.log(gh);
console.log(d1); // d1 object is also modified
*/
/*
let d1= { name: "john", age: 23, city: "Delhi" }
let gh={...d1}; // shallow copy
console.log(gh);
gh.name="santosh pandit";
gh.age=90;
console.log(gh);
console.log(d1); // d1 object is also modified
*/

// rest operator is only applicable for functions
// rest operator should be passed inside a function parameter
/*
function foo( g){
  console.log(g);
}

foo(9,8,9);

function bar(...santosh){  // rest operator
    // all the arguments form rest operator are packed inside 
    // an array ,when you call the function
   console.log(santosh[0]);
   for(let i=0;i<santosh.length;i++){
    console.log(santosh[i]);
   }
}

bar(8,9,0,0,0,0,8)
// a rest parameter should be the last in parameter list
function bar1(g,...santosh){  // rest operator
    // all the arguments form rest operator are packed inside 
    // an array ,when you call the function
   console.log(santosh);
   console.log(g);
   
}

bar1("alpha",89,89,0,1)
*/

// split ,join ,push ,pop ,shift ,unshift

// split actually splits a string in an array
// it converts a string in an array
/*
let str="hello,people";
let str2="he-llo-people";

console.log(str.split(","))
console.log(str.split(""))
console.log(str2.split("-"));
*/


// join method is used to convert an array into string 
/*
const arr=["hey","there","how","are","you"];
console.log(arr.join(","))  // this will return joined by ,


*/

//push ,pop  (from the end of an array )  from the right side
// push inserts an item at the end of an array 
/*
let c=[];
c.push(9);
console.log(c);
c.push(91);
console.log(c);

// pop removes the item from the end of an array
c.pop();
console.log(c);

c.pop();
console.log(c);
*/


//,shift ,unshift (from the beginning of an array)  // from the left side

// unshift inserts the item in the beginning of an array 
/*
let ck=[];
ck.unshift(90);
console.log(ck);
ck.unshift(7);
console.log(ck);
ck.unshift(167);
console.log(ck);

// shift removes the item from beginning of an array 
console.log(ck)
ck.shift();
console.log(ck)
*/



// How you can remove an item from middle of an array
/*
let c=[4,5,6,7,1,9,8]
let removed=c.splice(3,1);

console.log(c);
*/
// removing second last
/*
let c=[4,5,6,7,1,9,8]
let removed=c.splice(c.length-2,1);

console.log(c);
*/

// find is very similar to filter ,filter returns an array but find returns
// one item (first item)
/*
let c=[1,2,3,4]
console.log(
     c.find(function(ele){
         if(ele%2==0){
            return ele;
         }
     })

)
*/


//includes just like indexOf checks for the existence of an item in an array 
// but include returns true or false
/*
let arr=[1,2,3,4];

console.log(arr.includes(4));
console.log(arr.includes(40));

console.log(arr.indexOf(4));
console.log(arr.indexOf(40));
*/
/*

// Object.keys and Object.values and Object.entries
// All these methods return an array 
let obj={name:"shubham",city:"Delhi",work:"mentor"}
// Object.keys gives you an array of all the keys inside the object
console.log(Object.keys(obj));
// Object.values gives you an array of all the values inside the object

console.log(Object.values(obj));
// object.entries gives you array of both key and values
console.log(Object.entries(obj));
*/

// used to combine two arrays
// concat,

let arr1=[1,2,3];
let arr2=[4,5,6,7,8];
let arr3=[9,10,11,12,13]

console.log(arr1.concat(arr2));

console.log(arr2.concat(arr1,arr3));

let joined=[...arr1,...arr2];
console.log(joined);


/**
 * 
 * 
### Problem Statement:

You are given an array of objects representing various people, each with properties like `name`, `age`, and `country`. Your task is to perform the following operations in sequence:

1. **Filtering**: Filter out the people who are under 18 years of age.
2. **Mapping**: For the filtered array, create a new array where each person object is transformed to include a new property `isAdult` set to `true`.
3. **Splicing**: From this new array, remove the first two elements, and then add a new person object at the beginning of the array.

#### Example:

**Input Array:**
```javascript
[
  { name: "Alice", age: 25, country: "USA"},
  { name: "Bob", age: 17, country: "Canada" },
  { name: "Carlos", age: 32, country: "Mexico" },
  { name: "Diana", age: 15, country: "USA" },
  { name: "Eva", age: 20, country: "France" }
]
```

**Expected Output Array:**
```javascript
[
  { name: "NewPerson", age: 30, country: "Germany", isAdult: true },
  { name: "Carlos", age: 32, country: "Mexico", isAdult: true },
  { name: "Eva", age: 20, country: "France", isAdult: true }
]
```


 * 
 */

/**
 * Write a JavaScript function that takes an object as an 
 * input and returns a new object where the keys are the original keys in uppercase. 
 * Use Object.keys and the map method.
 * 
 * Given an object with different properties, write a function that filters out properties whose values are not strings. 
 * Use Object.values along with the filter method.
 * 
 * 
 * Create a function that takes an object and returns an array of entries, where each entry is [key, value] but the value is doubled if it is a number.
 *  Use Object.entries and map.
 * 
 * How would you merge two JavaScript objects, obj1 and obj2, so that the properties from obj2 overwrite those in obj1 if they exist in both objects?
 *  Demonstrate this using the spread operator.
 * 
 * Consider an object where some properties are themselves objects. Write a function that flattens this object to a single depth, keeping the nested property keys separated by a dot.
 *  Use Object.keys and recursion.
 * 
 * Create a function that takes an object and returns a new object where all numeric values are increased by 10, but non-numeric values are left unchanged. 
 * Use Object.entries, filter, and map.
 */

//2341
//3412
//4123
//1234

const arr=[1,2,3,4];

for (let i=0;i<4;i++){
    arr.push(arr.shift());
}

console.log("final output --",arr);