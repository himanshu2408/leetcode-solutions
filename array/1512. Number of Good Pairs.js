// Time Complexity: O(n)
// Space Complexity: O(1)

var numIdenticalPairs = function (nums) {
  let ans = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] == nums[j]) {
        ans++;
      }
    }
  }
  return ans;
};
