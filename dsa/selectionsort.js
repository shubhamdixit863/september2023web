let swapCount=0;

function selectionsort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i;
        let swap = false;
        for(let j=i+1;j<arr.length;j++){
          // here we will change the value of min
          if(arr[min]>arr[j]){
            min=j;
            swap = true;
          }

        }

        // we will make a swap here
        if(swap){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
            swapCount++;
        }
       

    }

return arr;
}

console.log(selectionsort([7, 5, 2, 6, 3]));  //3 
console.log(swapCount);

// convert selection sort above to use while loop