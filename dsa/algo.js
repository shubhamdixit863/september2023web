function foo(){

    for(let i=0;i<10000;i++){
      console.log(i);
    }
  }
  const t0 = performance.now();
  foo();
  const t1 = performance.now();
  
  console.log(`Call to doSomething took ${(t1 - t0)/1000} seconds.`);
  
  // 2.4  ,Math.floor() -->nearest and lowest whole number
  // 2.7 -->2
  // Math.ceil()-->nearest and biggest num



  // Time complexity is not the time taken by the algorithm
  // because time taken by the algorithm might be different in different devices
  // if you have an algorithm taking 2 seconds in a high computational power device 
  // it might take 30 second in a low end computaional device

  // Time taken by any algorithm doesnt also let us dertermine whether its good or bad
  // so we cant just say that if this algorithm is taking 2 second so its good 
  // and other is taking 10 seconds so its bad
// because the machines where these algos are running do matter in determing the time taken by them

// Then how will i distinguish which algorithm is best?

// so to determine which algo is best or bad
// you have to determine the time complexity

// And time complexity is detrmined by the amount of instructions executed by the machine for that algorithm
// or rather  i would say number of operations performed by the algorithm on the machine


for (let i=0;i<10;i++){
    console.log(i);
}

// so if you see above code teh number of operations performed by the cpu would be 10
// because the for loop runs for 10 times


function Printing(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

}
Printing([1,2,3,3,7,8,9]);

// here the for loop runs upto length of array that is 7 times  number of operations -7


Printing([1,2,3,3,7,8,9,19,1,8,123,67,890]);
// number of operations -13


// the number of operations are also dependent on the size of input

// Time complexity of algo is determined by --->number of operations performed by the cpu 
//--->which is dependent on size of input
/*
// determine numbeer of operations taken by the foo function
function foo(arr){
    let i=0; // 1 
    let arr2=[]  // 1 opration
// i+1i=
    for (let i=0;i<arr.length;i++){  // 1+n+2n  // where n is the length of array
        arr2.push(arr[i]*2); // n+n =2n

    }

return arr2;  // 1 operation

}
*/

//foo();   // 1+1 +1+n+n+1 =4+5n operations where n is the length of array


// 
let obj={};
let r=[2,3,4,4];
let objArr=[{name:"doma"},{name:"john"}];
console.log(

    objArr.filter(ele=> ele.name=="john")
)



// object destructring and array destructing  assignment
let obj1={age:22,city:"Delhi"}

const {age,city}=obj1;
console.log("Name of an obj",age,city); // obj1.age ,obj1.city

// destructring assignment in an array 

let arr=[1,2,3,4];
const [a,b,c]=arr;

console.log(a,b,c);

// react 

 // const[state,setState]= useState("initialState");

 ///

 function algo1(c){
 
    console.log(c);  //1
    let d=c*2;  //2 
    console.log(d);  //1
   return ; //1
    //1
 }
 algo1(8);  // 5 operations

 algo1(80);  // 5 operations
 algo1(2.5);

 //algo1(8000000,[1,2,3,3,4],890);  // 5 operations




// O(1);


 // O(5) =5
 // O(1)=1
 // O(1)

 // for this algorithm the number of operations are constant

 function algo2(arr){
    let arr2=[]  // 1
    let c= arr.forEach(Ele=>{
         arr2.push(Ele*Ele);  // 2n
    }) //1
return arr2; //1
 }

 algo2([2,3,4,5,6])  // 13  operations

 algo2([]) // length n ---> 2n+3 -if the value of n is 5 -->13
 // algo([20 elems])  --->  2*20+3= 43
 // here n is the size of input 


 // ---->Moving toward Big O;

 // big O is the general formular in which the number of operations performed by 
 // the algo can be resprsented
 // O(n) is the representation
 // O(n)=2n+3;
 // O(100000)=200000+3

 // O(n)=2n
 // O(n) =n

 // Time complexity
 //  O(n)


 // And generally what we say that time complexity if of order N
 // O(n2)
 // if we have complexity of O(n2) we say time complexity if of order N square

 // O(1)  -->constant time
 // O(N) -->good time complexity
 // O(N2)
 // O(N3)
 // O(logn)
 // O(nlogn);


 function footrt(arr){

 }
 footrt([7,8,9,0])

