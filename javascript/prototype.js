// How to create objects in javascript
// How object is represented in javascript
// Object literal representation
let a={name:"shubham",age:22,working:true}
// every object in javascript can be represented in this form

// There are 4 ways to create an object in javascript
//1- Using Object constructor (God object)
// 2- Direct creation or Object litearal way
// 3- Using constructor function
// 4- Using classes
// 5- Using Object.create();

// 1- Using object constructor
// objects take up the memory space they are saved into memory
const obj1=new Object();  // Object is a keyword
 // new keyword is used before a 
 //constructor (A constructor has same name as 
 //the class or the god object and is used to create an object)
 obj1.name="shubham";
 obj1.city="Delhi";

 console.log(obj1);


 // 2- Direct creation or Object litearal way
 let obj2={name:"shubham",city:"delhi"}

 console.log(obj2);


 // 3- Using constructor function

 // constructor function
 function Human(name ,age){
    this.name=name;  // here this representing the current object that will be created
    this.age=age;
   // console.log(2+3); // should not be done here 

 }

 const obj3=new Human("john",23);
 console.log(obj3);



 // your constructor function never returns anything
 // your constructor function wont have any logic other than initailizaing the value
 // Arrow functions can not be used as an constructor functions

 function Animal(){

 }

 const obj4=new Animal();
 obj4.name="johnny"
 console.log(obj4);

  // constructor function
  function Human2(a ,b){
    this.name=a;  // here this representing the current object that will be created
    this.age=b;
   // console.log(2+3); // should not be done here 

 }

 const obj5=new Human2("j","2");
 console.log(obj5);


 // 4 -Using classes

 class Animal2{
  
  constructor(legs,arms){
    this.legs=legs;
    this.arms=arms;

  }

  
 }

 const elephant=new Animal2(4,0);
 console.log(elephant);


 // with classes we can do inheritance

 class Mammal{

 }

 // when you dont have extends keyword in the class you donot need to call the super
 // because in such cases your Mamal objects will directly reference the God object

 const m=new Mammal();  // it will call the default constructor
 console.log(m);

 class Bird extends Mammal{
  constructor(feathers){
    super(); // it calls the parent class constructor
    this.feathers=feathers;

  }

 }

 const eagle=new Bird();
 console.log(eagle);
/*
 class LandBird extends Bird{
  constructor(legs,feathers){
    super(feathers);
    this.legs=legs;

  }

 }
 const penguin=new LandBird(2,2);
 console.log(penguin);
 */


 class A{

 }

 class B extends A{

 }

 class C extends B{

 }

 console.log(new C());

 //[9,9,0]  [Htmlcollection] [<div>]