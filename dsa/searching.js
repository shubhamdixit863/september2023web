// Searching in linear way


let arr=[1,2,3,8,5,7,4];

// linear search 
function search(arr,ele){
    for (let i=0;i<arr.length;i++){

        if (arr[i]==ele){
            return i;
        }
    }
    return -1;
}
// O(N);
console.log(search(arr,89))

// what if we have a sorted array 

let arr2=[1,2,3,4,5,8,9]  

// binary search comes into picture 
// binary search is only applicable to sorted arrays
//// O(logN)
function BinarySearch(arr,ele){
    let start=0;
    let end=arr.length-1;

    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if (ele>arr[mid]){
            start=mid+1;
    
        }else if(ele<arr[mid]) {
            end=mid-1;
    
        }else{
            // ele==arr[mid]
            return mid;
        }
    }

return -1
}

//console.log(BinarySearch(arr2,3))


//log2(n);// how many times you gonna  multiply 1/2  by itself such that it becomes 1/n


// 1/n = 1/2*1/2*1/2*1/2*1/2
//1/n= (1/2)^n


// binary search with recursion


function BinarySearchWithRecursion(arr,start,end,ele){

    // we dnt have a base case 
    if (start<=end){

   
    let mid=Math.floor((start+end)/2);
    if (ele>arr[mid]){
        start=mid+1;
       return  BinarySearchWithRecursion(arr,start,end,ele)
    }else if(ele<arr[mid]) {
        end=mid-1;
       return  BinarySearchWithRecursion(arr,start,end,ele)
    } else if (ele==arr[mid]){
        return mid;
    }
}
    return -1;

   
}

console.log(BinarySearchWithRecursion(arr2,0,arr2.length-1,3))