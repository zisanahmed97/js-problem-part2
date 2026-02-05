const height = [65,72,66,68,78,60,65];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(height);
console.log('max value is ',max);


