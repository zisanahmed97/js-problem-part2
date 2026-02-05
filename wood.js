/**
 * chair--> 3cft
 * table --> 10cft
 * bed --> 50ft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood= bedQuantity * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
          
}

const wood = woodQuantity(4,2,1);
console.log('wood needed ',wood);