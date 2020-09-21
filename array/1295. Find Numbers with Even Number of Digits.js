// Time Complexity: O(n)
// Space Complexity: O(1)

var countDigits = function (num) {
  return (Math.log(num) * Math.LOG10E + 1) | 0;
};

var findNumbers = function (nums) {
  let ans = 0;
  nums.forEach((num) => {
    if (countDigits(num) % 2 == 0) {
      ans++;
    }
  });

  return ans;
};
