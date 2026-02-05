const jim = 67;
const tim = 75;
const kim =91;

if(jim > tim && jim > kim){
    console.log('jim is a bc');
}else if(tim > jim && tim > kim){
    console.log('tim is the boss');
}else{
    console.log('kim is the kardisian');
}

//using function

function getMax(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if (num2 > num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
}

const max = getMax(56,78,54);
console.log('max num is ',max);

//for unlimited number
const max2 = Math.max(67,87,34,90,21,78,76);
console.log('max2 is ',max2); 
