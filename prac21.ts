type Order = {
    id:string;
    quantity:number;
    pricePerUnit:number;
}

function calculateGrandTotal(orders:Order[]):number{
    return orders.reduce((total, order)=>total + (order.quantity * order.pricePerUnit), 0);
}

const orders: Order[] = [
    { id: "o1", quantity: 2, pricePerUnit: 500 }, // 1000
    { id: "o2", quantity: 5, pricePerUnit: 100 }, // 500
    { id: "o3", quantity: 1, pricePerUnit: 2000 } // 2000
];

console.log(calculateGrandTotal(orders));
console.log(calculateGrandTotal([]));

/*
The Order type consists of three properties (id, quantity, and pricePerUnit).
The calculateGrandTotal function takes an array of Order objects.
It iterates through the array and multiplies each element's quantity by its pricePerUnit to calculate a subtotal price.
Then, it sums up each subtotal to calculate a grand total price.
Finally, it returns the total sum of the objects' price.
If it takes an empty array, it returns 0.
*/