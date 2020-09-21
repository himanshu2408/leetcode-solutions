// Time Complexity: O(n)
// Space Complexity: O(n)

var shuffle = function (nums, n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }

  return ans;
};
