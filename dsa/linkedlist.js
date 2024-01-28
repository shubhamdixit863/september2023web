// Linked list is a datstructure

class Node{

    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
      
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push(data){
        // here we have to check two things
        // firstly we have to check if the linked list is empty or not
        let node=new Node(data);
        if(this.head==null){
            // so the element we will be adding would be the head element
            this.head=node;
            this.tail=node;

        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;

    }


pop(){
    // pop removes the item as well 
    // and it will assign a new tail
    // we will check whether the linked list is empty or not 
    if(this.head==null){
        return null
    }
    
    let current=this.head;
    let newTail=null;
    while(current.next!=null){
        newTail=current;
        current=current.next;
    }
    this.tail=newTail;
    this.tail.next=null;
    this.length--;
    return current;


}



}
//



const ll=new LinkedList();
ll.push(2);
ll.push(3);

ll.push(19);
console.log(ll);

console.log(ll.pop());
console.log(ll);
console.log(ll.pop());
console.log(ll);

//console.log(ll.pop());
//console.log(ll);

