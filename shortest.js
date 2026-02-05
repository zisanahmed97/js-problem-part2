const height = [65,72,66,68,78,60,65];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(height);
console.log('minimum value is ',min);