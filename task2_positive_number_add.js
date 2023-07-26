
function addPositive(arr){

    let total = 0;

    for(let i of arr){
      if(i>=0){
        total = total+i;
      }
      
    }

    return total;

}

console.log(addPositive([2, -5, 10, -3, 7]));