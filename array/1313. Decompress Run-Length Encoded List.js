var decompressRLElist = function (nums) {
  let ans = [];

  for (let i = 1; i < nums.length; i = i + 2) {
    for (j = 0; j < nums[i - 1]; j++) {
      ans.push(nums[i]);
    }
  }

  return ans;
};
