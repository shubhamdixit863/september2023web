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
