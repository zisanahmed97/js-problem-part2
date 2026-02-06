const products =[
    {name:'chiruni',price: 300 ,   quantity:3 },
    {name:'shampoo',price: 670  ,  quantity:2},
    {name:'facewash',price: 490  , quantity:5 },
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        let thisProductCost = product.price * product.quantity;
       total = total + thisProductCost;
    }
    return total;
}

const total = cartTotal(products);
console.log('total price is ',total);