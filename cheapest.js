const phones = [
    {name : ' Samsung', price:'20000', camera: '12mp', color: 'Black'},
    {name : ' Xiaomi', price:'10000', camera: '12mp', color: 'Black'},
    {name : ' Realme', price:'21000', camera: '12mp', color: 'Black'},
    {name : ' Iphone', price:'100000', camera: '12mp', color: 'Black'},
    {name : ' Oppoo', price:'18000', camera: '12mp', color: 'Black'},
    {name : ' Walton', price:'30000', camera: '12mp', color: 'Black'},
    {name : ' Pixel', price:'50000', camera: '12mp', color: 'Black'},
]

function cheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }

    }
    return min;

}

const cheap = cheapestPhone(phones);
console.log('cheapest phone is ',cheap)