var runningSum = function (nums) {
  var res = [];
  var currSum = nums[0];
  res.push(currSum);
  for (var i = 1; i < nums.length; i++) {
    currSum += nums[i];
    res.push(currSum);
  }
  return res;
};
