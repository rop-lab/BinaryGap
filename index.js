// declare the function
function solution(N) {
    //convert to binary string
    const binaryStr = N.toString(2);
  
    // iterate through the variables
    let longestGap = 0;
    let currentGap = 0;
    let counting = false;
  
    for (let k of binaryStr) {
      if (k === '0') {
        if (counting) {
          currentGap += 1;
        }
      } else {
        if (counting) {
          longestGap = Math.max(longestGap, currentGap); // to give the longestGap
          currentGap = 0;
        } else {
          counting = true;
        }
      }
    }
  
    return longestGap;
  }
  
  // Call the function
  let result = solution(529);
  console.log(result); // Output: 4
  