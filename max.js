const disha = 67;
const salman = 89;

if(disha > salman){
    console.log('disha will get the strawberry');
}else{
    console.log('salman will get the strawberry');
}


function getMax(num1 , num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}

const max1 = getMax(79,91);
const max2 = getMax(89,57);
const ultimateMax = getMax(max1,max2);
console.log("maximum number is:",ultimateMax); 