const products =[
    {name:'chiruni',price: 300},
    {name:'shampoo',price: 670},
    {name:'facewash',price: 490},
]

function totalPrice(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = totalPrice(products);
console.log('total price is ',total);