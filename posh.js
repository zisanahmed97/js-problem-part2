const phones = [
    {name : ' Samsung', price:20000, camera: '12mp', color: 'Black'},
    {name : ' Xiaomi', price:10000, camera: '12mp', color: 'Black'},
    {name : ' Realme', price:21000, camera: '12mp', color: 'Black'},
    {name : ' Iphone', price:100000, camera: '12mp', color: 'Black'},
    {name : ' Oppoo', price:18000, camera: '12mp', color: 'Black'},
    {name : ' Walton', price:30000, camera: '12mp', color: 'Black'},
    {name : ' Pixel', price:50000, camera: '12mp', color: 'Black'},
]

function poshPhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }

    }
    return max;

}

const posh = poshPhone(phones);
console.log('posh phone is ',posh);