function arrayMap(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j]
            if(sum === target) return true; // if sum equals the target that means there're some consecutive elements that adds up to the target
            if(sum > target) break; // if sum had exceeded the target no need to continue the loop
        }
    }
    return false
}

console.log(arrayMap([4, 2, 7, 3, 2, 5, 10, 2], 17))