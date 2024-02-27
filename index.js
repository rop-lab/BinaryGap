function solution(N){
    const binaryStr = N.toString(2);

    let maxGap = 0;
    let currentGap = 0;

    // Iterate the  string from left to right, counting gaps and updating max gap if necessary
    for (const char of binaryStr){
        if (char === '1'){
            
            maxGap = Math.max(maxGap, currentGap);
            currentGap = 0;
        } else {
            currentGap++;
        }
    }
    return maxGap + 1;   // Add one because we are looking at
    // the number of bits between ones not
}
const N = (529);
console.log(solution(N)); 
// Output : 4
            