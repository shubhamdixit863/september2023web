// I have a operation /task here 
// task is to get the student record from a database  as per its universityId if the record is not found throw error

const Database=[
    {
      "name": "Willie England",
      "email": "willieengland@macronaut.com",
      "username": "willieengland@macronaut.com",
      "password": "Tooleville",
      "image": "Newry",
      "universityId": 949883
    },
    {
      "name": "Lyons Santos",
      "email": "lyonssantos@macronaut.com",
      "username": "lyonssantos@macronaut.com",
      "password": "Farmers",
      "image": "Ellerslie",
      "universityId": 253619
    },
    {
      "name": "Snow Giles",
      "email": "snowgiles@macronaut.com",
      "username": "snowgiles@macronaut.com",
      "password": "Gilmore",
      "image": "Montura",
      "universityId": 745788
    },
    {
      "name": "Rowland Fleming",
      "email": "rowlandfleming@macronaut.com",
      "username": "rowlandfleming@macronaut.com",
      "password": "Gorham",
      "image": "Monument",
      "universityId": 902664
    },
    {
      "name": "Reeves Matthews",
      "email": "reevesmatthews@macronaut.com",
      "username": "reevesmatthews@macronaut.com",
      "password": "Sterling",
      "image": "Fruitdale",
      "universityId": 557566
    },
    {
      "name": "Parks Horne",
      "email": "parkshorne@macronaut.com",
      "username": "parkshorne@macronaut.com",
      "password": "Jamestown",
      "image": "Imperial",
      "universityId": 390761
    },
    {
      "name": "Raymond Sparks",
      "email": "raymondsparks@macronaut.com",
      "username": "raymondsparks@macronaut.com",
      "password": "Richmond",
      "image": "Cornucopia",
      "universityId": 651298
    },
    {
      "name": "Heather Washington",
      "email": "heatherwashington@macronaut.com",
      "username": "heatherwashington@macronaut.com",
      "password": "Cochranville",
      "image": "Whitmer",
      "universityId": 948912
    },
    {
      "name": "Mary Collier",
      "email": "marycollier@macronaut.com",
      "username": "marycollier@macronaut.com",
      "password": "Cuylerville",
      "image": "Iberia",
      "universityId": 563346
    },
    {
      "name": "Elizabeth Mcpherson",
      "email": "elizabethmcpherson@macronaut.com",
      "username": "elizabethmcpherson@macronaut.com",
      "password": "Floriston",
      "image": "Valmy",
      "universityId": 228987
    },
    {
      "name": "Nichole Clemons",
      "email": "nicholeclemons@macronaut.com",
      "username": "nicholeclemons@macronaut.com",
      "password": "Riegelwood",
      "image": "Cleary",
      "universityId": 891848
    },
    {
      "name": "Rosanne Reese",
      "email": "rosannereese@macronaut.com",
      "username": "rosannereese@macronaut.com",
      "password": "Bradenville",
      "image": "Tuttle",
      "universityId": 303179
    },
    {
      "name": "Mamie Short",
      "email": "mamieshort@macronaut.com",
      "username": "mamieshort@macronaut.com",
      "password": "Sheatown",
      "image": "Leroy",
      "universityId": 381151
    },
    {
      "name": "Peterson Perry",
      "email": "petersonperry@macronaut.com",
      "username": "petersonperry@macronaut.com",
      "password": "Skyland",
      "image": "Bangor",
      "universityId": 976944
    },
    {
      "name": "Goodman Mathews",
      "email": "goodmanmathews@macronaut.com",
      "username": "goodmanmathews@macronaut.com",
      "password": "Tryon",
      "image": "Bellamy",
      "universityId": 941213
    },
    {
      "name": "Watts Perkins",
      "email": "wattsperkins@macronaut.com",
      "username": "wattsperkins@macronaut.com",
      "password": "Convent",
      "image": "Rew",
      "universityId": 348700
    },
    {
      "name": "Graciela Dixon",
      "email": "gracieladixon@macronaut.com",
      "username": "gracieladixon@macronaut.com",
      "password": "Harmon",
      "image": "Thornport",
      "universityId": 563108
    },
    {
      "name": "Erin Caldwell",
      "email": "erincaldwell@macronaut.com",
      "username": "erincaldwell@macronaut.com",
      "password": "Mathews",
      "image": "Babb",
      "universityId": 989223
    },
    {
      "name": "Rios Hahn",
      "email": "rioshahn@macronaut.com",
      "username": "rioshahn@macronaut.com",
      "password": "Northchase",
      "image": "Wyoming",
      "universityId": 571215
    },
    {
      "name": "Clements Hobbs",
      "email": "clementshobbs@macronaut.com",
      "username": "clementshobbs@macronaut.com",
      "password": "Tecolotito",
      "image": "Clinton",
      "universityId": 59620
    },
    {
      "name": "Figueroa Townsend",
      "email": "figueroatownsend@macronaut.com",
      "username": "figueroatownsend@macronaut.com",
      "password": "Veguita",
      "image": "Joes",
      "universityId": 511559
    },
    {
      "name": "Cash Beasley",
      "email": "cashbeasley@macronaut.com",
      "username": "cashbeasley@macronaut.com",
      "password": "Rose",
      "image": "Norwood",
      "universityId": 675569
    },
    {
      "name": "Fulton Hopkins",
      "email": "fultonhopkins@macronaut.com",
      "username": "fultonhopkins@macronaut.com",
      "password": "Croom",
      "image": "Delwood",
      "universityId": 317993
    }
  ]

  // internally  it will happend
  /*

  cb=function(err,studentData){
    if(err!=null){
        console.log(err)
    }
    else{
        studentSome=studentData
        console.log(studentData);
    }

}

cb(null,{
    "name": "Fulton Hopkins",
    "email": "fultonhopkins@macronaut.com",
    "username": "fultonhopkins@macronaut.com",
    "password": "Croom",
    "image": "Delwood",
    "universityId": 317993
  })
  */
  function DbOperation(universityId,cb){
    // I will get the student based on the univrsity Id
    setTimeout(() => {
        let student=Database.find(ele=>{
            return ele.universityId==universityId
        })

        if(student){
            cb(null,student)
        }else{
            cb(new Error("student not found"),null)

        }
       
    }, 3000);
    // in a function if we dnt have anything in return the undefined  is returned

  }
  let studentSome="i am student";
DbOperation(317993,function(err,studentData){
    if(err!=null){
        console.log(err)
    }
    else{
        studentSome=studentData
        console.log(studentData);
    }

})

console.log(studentSome);  // output ??? 



// Promise based 


function DbOperationPromise(universityId,cb){
 
    const promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            let student=Database.find(ele=>{
                return ele.universityId==universityId
            })
    
            if(student){
                resolve(student)
            }else{
                reject({
                    resposnse:404
                })
    
            }
           
        }, 3000);

    })
    
    // in a function if we dnt have anything in return the undefined  is returned
return promise;
  }

 
  DbOperationPromise(675569).then(data=>{
    console.log("promise",data);
  }).catch(err=>{
    console.log(err);
  })


  // async await

  async function GetData(){

    try{
        const t0 = performance.now();
        let data=  await DbOperationPromise(675569);const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
      console.log("Data for async await",data);
    }catch(err){
        console.log(err.resposnse);
    }
  }
  GetData();