function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
          // here we will change the value of min
          if(arr[min]>arr[j]){
            min=j;
          }

        }

        // we will make a swap here
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;

    }

return arr;
}

console.log(selectionSort([78,2,12,90,0,2]))