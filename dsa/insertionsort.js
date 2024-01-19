function insertionSort(arr){
  var currentVal;
  for(var i=1;i<arr.length;i++){
    currentVal=arr[i];
    var j=i-1;

    // we will run a reverse while loop

    while(j>=0){
        if(arr[j]>currentVal){
           // we will shift the larger element  to the right

           arr[j+1]=arr[j];
           j--;
             
        }else{
            break;
        }

    }
    arr[j+1]=currentVal;

   
  }

  return arr;

}


console.log(insertionSort([2,1,4,3]))