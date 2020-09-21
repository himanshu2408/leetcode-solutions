var createTargetArray = function (nums, index) {
  let len = nums.length;
  let ans = [];
  for (let i = 0; i < len; i++) {
    ans.splice(index[i], 0, nums[i]);
  }

  return ans;
};
