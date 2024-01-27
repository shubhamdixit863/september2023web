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

    }




}
//



const ll=new LinkedList();
ll.push(2);
ll.push(3);
console.log(ll);

ll.push(19);
console.log(JSON.stringify(ll));
