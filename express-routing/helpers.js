@param {Array} arr

function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next){
        acc[next] = (acc[next] || 0) + 1;
        return acc;
        }, {});
    };

@param {Array} arr

function findModel(arr) {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for(let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key]; 
        }
    }

    return mostFrequent;

}

@param {Array} numsAsString
@returns {Array|Error}

function convertAndValidateNumsArray(numsAsString){
    let result = [];

for(let i = 0; i < numsAsString.length; i++){
        let num = Number(numsAsString[i]);
        
if(Number.isNaN(valToNumber)){
    return new Error(
        `The value '${numsAsString[i]}' at index ${i} is not a number`
        );
    }

    result.push(valToNumber);
}

    return result;
}

function findMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function(acc, cur){
        return acc + cur;
    }) / nums.length
}

function findMedian(nums){

    nums.sort((a, b) => a - b);
    let median;

    if(nums.length % 2 === 0){
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
        } else {
            median = nums[middleIndex];
        }
        return median;
}

module.exports = {
    createFrequencyCounter,
    findMedian,
    findMean,
    findMode,
    convertAndValidateNumsArray
};