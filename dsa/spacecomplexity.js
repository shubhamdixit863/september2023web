function foo(num){
    let arr=[];
    for (let i=0;i<num;i++){
        arr.push(i*8);
    }

}
let arr=[1,2,3,4,5,6];

foo(100)

// The space complexity of your algorithm is actually determined by the
// amount of memory it occupies during run time

// O(N);

function foo(arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
      arr2.push(arr[i]*9);
    }

return arr2;
}

// the space complexity here is O(N);
// quadratic space complexity

function foo(arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
      arr2.push([i,arr[0]]);
    }

return arr2;
}

// quadratic space complexity or O(N2)

function createMatrix(n){
    let matrix=[];
    for (let i=0;i<n;i++){
        matrix[i]=[];
        for (let j=0;j<n;j++){
            matrix[i][j]=i+j;
        }
    }
return matrix;
}



// space complexity would be linear
function createMatrix(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
        obj[i]=arr[i];
    }
  
}




// cubic space complexity --- three dimensional array 

// ON(4) --->4 dimensional array


/// 


var twoSum = function(nums, target) {
    
    const map=new Map();
for(let i=0;i<nums.length;i++){
    const complement=target-nums[i];
    if(map.get(complement)!==undefined){ // if you are adding anything to map or getting anything O(1)
        return [map.get(complement),i]
    }
   // map[nums[i]]=i;  // O(1)
   map.set(nums[i],i)

}  

};
// O(1);
function foo2(n){
    let j=0;
    for(let i=0;i<n;i++){
       let k=i;
    }
    //  ---  you should have n separate space occupied
} 

foo2(8888)

// f(n)=2n2+3n+6;