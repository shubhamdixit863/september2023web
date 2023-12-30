const promise=new Promise((resolve,reject)=>{
    // we either call resolve or we call reject depending on the situation
    // so if the process is successfull we call resolve()
    // and if the process fails you have to call reject();
});


// error first callbacks 
function DummyApiCall(cb){

    setTimeout(()=>{
      const students=[
        {
          name:"Shamim",scores:[80,90,89,67]
        },
        {
          name:"Sid",scores:[80,90,79,67]
        },
        {
          name:"Geet",scores:[80,90,59,67]
        },
        {
          name:"Ram",scores:[60,90,89,67]
        }
  
      ]
      cb(students);
     
      
    },2000)
    
    return ;
  }
  
  function RetrieveStudentByName(studentArray,name,cb){
    setTimeout(()=>{
  
      let student=studentArray.find(ele=>ele.name==name);

      // if we find the student then what we will do

      if (student){
        cb(null,student)
      }else{
        cb(new Error("student not found"),null)
      }
    
    },2000)
    
  }


  DummyApiCall(function(students){
    RetrieveStudentByName(students,"Sidu",function(err,student){
        if(err==null){
            console.log("students",student);
            // studentexists
        } else{
            console.error(err);
        }

    })
  })


  function RetrieveStudentByNamPromise(studentArray,name){
   const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
  
        let student=studentArray.find(ele=>ele.name==name);
        if (student){
            resolve(student);
        }else{
            reject("student not found");
        }
      
      },2000)

   })

   return promise;
    
  }


  function DummyApiCall(){
    const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const students=[
          {
            name:"Shamim",scores:[80,90,89,67]
          },
          {
            name:"Sid",scores:[80,90,79,67]
          },
          {
            name:"Geet",scores:[80,90,59,67]
          },
          {
            name:"Ram",scores:[60,90,89,67]
          }
    
        ]
        resolve(students);
      },2000)
        
    })
return promise;
    
  }

  DummyApiCall().then(data=>{
    //console.log("If promise is successful i would be printed",data);
    
    RetrieveStudentByNamPromise(data,"Side").then(student=>{
        console.log("Student--",student);
    }).catch(err=>{
        console.log("Promise failed",err);
    })

  }).catch(err=>{
    console.log(err);
  })


  function ExamPromise(marks){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(marks>90){
          // getting a playstattion
          resolve("Got a playstations")
        }
        else{
          // getting punished
          reject("punished")
        }
    
      },5000)

    })

  }

  /*
class Promise{
  constructor(cb){

  }
   then(cb){

   }
   
   catch(cb){

   }
}

const promis=new Promise((res,reject)=>{

});

promis.then(()=>{

}).catch((err)=>{

})
*/
const pr=ExamPromise(89);

  
ExamPromise(89).then((result)=>{
    console.log(result);

  })
  .catch(err=>{
    console.log(err);
  })


//  es7 ---standard -- async await came into picture

// async is a keyword that is used with a function 
// and an async function always returns a promise
async function foo(){
  return 9;
}


 function foo1(){
  return 9;
}
console.log("Function foo called",foo());
console.log("Function foo called",foo1());


foo().then(Data=>{
  console.log("promise here",Data);
}).catch(Err=>{
  console.log(Err)
})


// await is a keyword it is used to get the resolved value of a promise

async function bar(){
  try{
    let data=await foo();
    console.log(data);
      
  console.log("Async function bar",data);
  }
  catch(err){
    console.log(err);
  }
 

}

bar();

