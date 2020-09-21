// Time Complexity: O(nLogn)
// Space Complexity: O(n)

var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
};
