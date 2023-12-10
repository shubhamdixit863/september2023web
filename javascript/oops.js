// Abstraction
// encapsulation
// inheritance
//polymorphism

// encapsulation -->bundling of properties and bheaviour
// In encapsulation we see the whole object as such and we are not specific about the properties or behaviour
// it holds
class  Bag{
    constructor(lunchbox,books,laptop){
        this.lunchbox=lunchbox;
        this.books=books;
        this.laptop=laptop;

    }

    getItem(){
        return this.books;
    }

}
const collegebag=new Bag("lunch","books","laptop");
console.log(collegebag);

// abstraction 
// It means hiding the complex reality while exposing only the necessary parts in a simpler way

class Mobile{

    constructor(model,brand){
        this.model=model;
        this.brand=brand;
    }

    makeCall(){
        console.log("making a call please wait ...");
        // we can put some complex logic for making a call
        // we might do soem tcp ip connection
        // or some api call

    }
}
const myphone=new Mobile("iphone 14","Apple")
myphone.makeCall();


// Polymorphism --> One object multiple forms or multiple behaviour
// It allows objects of different classes to be treated as objects of common super class

class Vehicle{
    constructor(){
        console.log("creating vehicle---");
    }
    start(){
        console.log("vehicle starting .....")
    }
}
class Bike extends Vehicle{
    start(){
        console.log("bike  starting .....")
    }
}

class Car extends Vehicle{
  
    start(){
  
        console.log("car  starting .....")
    }
}
let  mybike=new Bike();
//let  mycar=new Car();
mybike.start();
//mycar.start();