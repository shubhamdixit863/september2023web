function merge(arr1,arr2){
  // arr1 and arr2 both are sorted

  let i=0;
  let j=0;
  let results=[];
  while(i<arr1.length && j<arr2.length){
      if(arr2[j]>arr1[i]){
        results.push(arr1[i]);
        i++;
      }else{
        results.push(arr2[j]);
        j++;
      }
    
  }

  if(i<arr1.length){
    while(i<arr1.length){
      results.push(arr1[i])
      i++;
    }
    
  }

 else  if(j<arr2.length){
   while(j<arr2.length){
     results.push(arr2[j])
     j++;
   }
    

  }

  return results;
}

merge([1,2,7],[5,6,8,9])

// [1,2,7]  [5,6,8,9]
// [1,2,7,5,6,8,9]
// [1,2,5,6,7,8]


function mergeSort(arr){

    // We gonna be doing recursion
    // base condition 
    if(arr.length<=1){
        return arr;

    }

    // We have to find out the point through which we will divide the array
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));

    // we have to merge the arrays as well

   return  merge(left,right);
}


// the complexity of division function is n*log(N);
// O(nlogn)
/**
 * function sort(arr1,arr2){
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i]>arr2[j]){
        let temp=arr1[i]
        arr1[i]=arr2[j]
        arr2[j]=temp
      }
    }
  }
  return arr1.concat(arr2)
 
 
  
}
let arr1=[1,8,6]
let arr2=[2,5,3]
 
console.log(sort(arr1,arr2))
 * 
 * 
 */

console.log("the sorted array with merge sort",mergeSort([2,1,78,12,3,5,0]))