
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                // we will swap
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp

            }

        }

    }
return arr;
}

console.log(bubbleSort([12,1,78,0,4]))