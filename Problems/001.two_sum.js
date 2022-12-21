var twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let x = target - nums[i];
    if (seen[x] !== undefined) {
      return [seen[x], i];
    } else {
      seen[currNum] = i;
    }
  }
};

console.log(twoSum([3, 2, 3], 6)); //[0,2]
