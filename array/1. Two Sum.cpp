#include <unordered_map>
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> s;
        vector <int> answer;
        for(int i = 0; i < nums.size(); i++){
            if(s.find(target - nums[i]) != s.end()){
                answer.push_back(s[target - nums[i]]);
                answer.push_back(i);
                break;
            }
            s[nums[i]] = i;
        }
        return answer;
    }
};