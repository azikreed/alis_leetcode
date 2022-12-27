var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;

  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }

  return nums;
};
