const nums = [0,1,2,4,5,6,7];

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