function find_target_value_add(arr, target) {
    let forword = 0;
    let backward = arr.length - 1;
  
    while (forword < backward) {
      const sum = arr[forword] + arr[backward];
  
      if (sum === target) {
        return [forword, backward];
      } else if (sum < target) {
        forword++;
      } else {
        backward--;
      }
    }
  
    // If no pair is found, return an empty array
    return [];
  }


  const sortedArray = [2, 3, 6, 8, 11, 15];
const target = 9;

const result = find_target_value_add(sortedArray, target);
console.log(result);