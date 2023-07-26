function romanToInt(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentSymbol = roman[i];
      const nextSymbol = roman[i + 1];
      const currentValue = romanNumerals[currentSymbol];
      const nextValue = romanNumerals[nextSymbol];
  
      if (nextValue > currentValue) {
        result += nextValue - currentValue;
        i++; // Skip the next symbol as it's already used in the subtraction
      } else {
        result += currentValue;
      }
    }
  
    return result;
  }
  
 
  console.log(romanToInt("XXI")); 
//   console.log(romanToInt("XXI"));
//   console.log(romanToInt("IV"));
//   console.log(romanToInt("XLII")); 
//   console.log(romanToInt("MMXXI")); 
  