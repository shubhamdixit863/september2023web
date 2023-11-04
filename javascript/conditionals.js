function Conditionals(){
    // you can have only one if condition for a logic or in a set
    if(condition){  // condition should be evaluated as boolean
        // the code that you want to execute when your condition is true
    }else if(condition2){ //condition2 should be evaluated as boolean // you can have multiple elseif condition

    }else{
        // this would be executed when any of the condition above doesn't gets executed  
    }
}



function CheckIfItsNumber2Or3(num){
    // == equality operator  2==2  -->this expression evaluates to a boolean (true or false)
    // = --->assignment operator ,let c=9; (we are assigning 9 value to c);
    // == -->equality operator ,it checks whether two values on left and right are equal or not
    // if and else if needs to have boolean value in the ()
    if(num == 2 ){ // 3==2
        console.log("Num is 2 ");

    }else if(num == 3){ // 3==3
        console.log("Num is 3 ");

    }else{
        console.log("Num is neither 2 nor 3 ");
    
    }

}
// I am calling the function
CheckIfItsNumber2Or3(2);
CheckIfItsNumber2Or3(3);
CheckIfItsNumber2Or3(30);


console.log(4==5);

console.log(41==51);  // false

console.log(1==1);


// Write a function that takes string argument ,if the string is A print Apple ,if string is B ,print
// banana ,if string is C print cat ,otherwise print I dont know
// Anything inside  ---> "c" ,'c' -->string

function CheckString(value){
    if (value=='A'){  // --> A == A -->true
        console.log("Apple")
    }else if(value=="B"){
        console.log("Banana")
    }else if(value=="C"){
        console.log("Cat")
    }else{
       console.log("I dont know");
    }

}
//let A="A";
//CheckString("A");