// Time Complexity: O(n)
// Space Complexity: O(n)

var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = 0;
  let ans = [];

  candies.forEach((candy) => {
    maxCandies = Math.max(maxCandies, candy);
  });

  candies.forEach((candy) => {
    if (candy + extraCandies >= maxCandies) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  });

  return ans;
};
