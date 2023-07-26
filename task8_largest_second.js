
function find_second_largest(arr){
    
    let firstmin=arr[0];
    let secondmin=arr[1];

for(i=0;i<=arr.length;i++) {
     if(arr[i]<firstmin){
          secondmin=firstmin;
          firstmin=arr[i];
     }
     else if(i>=1 && arr[i]<secondmin) {
         secondmin=arr[i];
     }

}


return secondmin;

}

let arr=[1,0,1,2,8,5];

console.log(find_second_largest(arr))



