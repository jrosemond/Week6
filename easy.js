

// function findAverage(array){
//     let average = 0;
//     for (let i = 0; i < array.length; i++){
//         let currentNum = array[i]
//         average <= currentNum;


//     }
//     average = average / array.length
//     return average;
// }
// console.log(findAverage([[1 , 4 , 7]]));

 const nums = [0,1,2,4,5,6,7];

// console.log(array.indexOf(10));

function findMin(nums) {
    if (nums.length === 1) { 
        return nums[0];
    }

    let left = 0, right = nums.length - 1 

    if (nums[right] > nums[0]) { 
        return nums[0];
    }

    while (left < right) {  
        const mid = Math.floor((left + right) / 2); 
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
  }
  return nums[left];
}

console.log(findMin(nums));