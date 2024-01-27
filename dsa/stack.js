// 

class Stack{
    constructor(){
        this.array=[];
    }

    push(item){
        // it inserts the item in the stack
        this.array.push(item);

    }


    pop(){
        if(this.array.length==0){
            // we dnt have any items in the internal array
            return null
        }
       return this.array.pop();

    }

    peek(){
        if(this.array.length==0){
            // we dnt have any items in the internal array
            return null
        }
        return this.array[this.array.length-1]
    }
    size(){
        return this.array.length;
    }
}

const stack=new Stack();

stack.push(9);
console.log(stack);
console.log(stack.peek());
console.log(stack);
console.log(stack.pop());
console.log(stack);



/**
 * Leet code problem 

*/


//let stack=[];

var isValid = function(str) {
  let openingBrackets=["(","{","["];
   let closingBrackets=[")","}","]"];

   for (let i=0;i<str.length;i++){
       if(openingBrackets.includes(str[i])){
          stack.push(str[i]);
       }else{

           //  we have to check whether the stack has its opening bracket or not
           // we will pop the stack
          let ele= stack.pop()
        // console.log(ele,str[i]);
          let indexofOpening=openingBrackets.indexOf(ele);
          let indexOfClosing=closingBrackets.indexOf(str[i]);
        // console.log(indexOfClosing,indexofOpening);
          if (indexofOpening!=indexOfClosing){
              return false
          }
      

       }
   }
  if(stack.length==0){
      return true;
  }

   return false;

};

// ([{())}])
// ([)(]) // invalid string

console.log(isValid("{[]}"))