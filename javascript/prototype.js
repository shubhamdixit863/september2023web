// How to create objects in javascript
// How object is represented in javascript
// Object literal representation
/*
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

  // Constructor function methods
  Human2.prototype.getName=function(){
    return this.name;
   }
  
 const obj5=new Human2("j","2");
 const obj6=new Human2("jongi","2");

 console.log(obj5);
 console.log("Name---",obj5.getName())
 console.log("Name---",obj6.getName())





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

  getFeathers(){
    return this.feathers;
  }

 }

 const eagle=new Bird(9);
 console.log("feathers",eagle.getFeathers());
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

 //console.log(new C());

 //[9,9,0]  [Htmlcollection] [<div>]

 /**
  * 
  * 
  * 
### Problem Statement: "Library Management System"

#### Objective:
Create a simple Library Management System using JavaScript classes and prototypes.
The system should be able to handle books and users, allowing for basic operations 
like adding new books, registering users, and checking books in and out.

#### Requirements:

1. **Book Class:**
   - Attributes: `title`, `author`, `ISBN`, `isAvailable`.
   - Methods:
     - A method to toggle the `isAvailable` status (i.e., when a book is checked out or returned).

2. **User Class:**
   - Attributes: `name`, `userID`, `booksCheckedOut`.
   - Methods:
     - `checkOutBook(book)`: Should add a book to the user's `booksCheckedOut` list and update the book's `isAvailable` status.
 
     - `returnBook(book)`: Should remove the book from the user's `booksCheckedOut` list and update the book's `isAvailable` status.
class Library{
  constructor(){
    this.booksLib=[];
    this.users=[User];
  }

  addBook(book){
     this.booksLib.push(book);
  }
}
3. **Library Class:**
   - Attributes: `books` (an array of `Book` instances), `users` (an array of `User` instances).
   - Methods:
     - `addBook(book)`: Add a new book to the library.
     - `registerUser(user)`: Add a new user to the library.
     - `findBookByISBN(ISBN)`: Find and return a book by its ISBN.
     - `findUserByID(userID)`: Find and return a user by their userID.

#### Additional Challenges:

- Implement error handling. For example, prevent checking out a book that is not available or returning a book that wasn't checked out.
- Add a method to the Library class to display all available books.
- Implement a prototype method for the Book class that returns a string representation of the book details.




  * 
  */


// 5- Using Object.create();

Object.prototype.name="God object";
const grandfather=new Object();
//grandfather.name="john";
grandfather.assets="2 houses";

console.log(grandfather);

const father=Object.create(grandfather);
//father.name="Shawn"
father.assets="2 cars";

console.log(father);

const son=Object.create(father);
//son.name="Henry"
son.car="Ferrari"
son.assets="ps5";


console.log(son);


// prototype chain

// There are two kinds of properties one is direct property that belongs to object and one is prototype property

// When you access any property firstly the javascript will look for the direct property
// if it exists it prints it out 
// other wise it will move above to the prototype chain
console.log("Name",son.name);
console.log("Assets",son.assets);// ?? 2 houses