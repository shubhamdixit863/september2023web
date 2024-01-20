function merge(arr1,arr2){
    // arr1 and arr2 are sorted 
    // now you have to determine an algorithm to merge this sorted array

    let results=[];
    let i=0;
    let j=0;
    //[1,2,7]  [5,6,8,9]

    while(i<arr1.length && j<arr2.length){
             if(arr2[j]>arr1[i]){
                results.push(arr1[i])
                i++
                

             }else{
                results.push(arr2[j])
                j++
             }

             
    }

    console.log(results);

    //[1,2,5,6,7]

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

    merge(left,right);


}

