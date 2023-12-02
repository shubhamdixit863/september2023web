// this event will get fired once the dom is ready 100 percent

window.onload = (event) => {
    console.log("page is fully loaded");
  };

  // Arrow functions ,template literals

window.addEventListener("load",function(){

    let add=document.getElementById("add");
    let subtract=document.getElementById("subtract");
    
    
    let multiply=document.getElementById("multiply");
    let one=document.getElementById("one");
    let two=document.getElementById("two");
    let output=document.getElementById("output");
    
    

   
    
    
    add.addEventListener("click",function(){
         let onevalue=one.value;
         let twovalue=two.value;
         debugger;

         // parseInt(1,2,3,) ,parseFloat  (7.9,8.9)
         let sum=Number(onevalue)+Number(twovalue);
         output.value=sum;
         debugger;
    
    })
    
    multiply.addEventListener("click",function(){
        let onevalue=one.value;
         let twovalue=two.value;
    
         // parseInt(1,2,3,) ,parseFloat  (7.9,8.9)
         let product=Number(onevalue)*Number(twovalue);
         output.value=product;
        
    })
    subtract.addEventListener("click",function(){
        let onevalue=one.value;
         let twovalue=two.value;
    
         // parseInt(1,2,3,) ,parseFloat  (7.9,8.9)
         let difference=Number(onevalue)-Number(twovalue);
         output.value=difference;
    })
})

