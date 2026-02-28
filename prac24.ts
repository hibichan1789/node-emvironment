type Customer = {
    name:string;
    isMember:boolean;
    purchaseAmount:number;
}

function calculateTotalWithDiscount(customers:Customer[]):number{
    const discountRate = 0.10
    const grandTotal = customers.reduce((sum, customer)=>{
        const appliedPurchaseAmount = customer.isMember ? Math.floor(customer.purchaseAmount * (1 - discountRate)) : customer.purchaseAmount;
        return sum + appliedPurchaseAmount;
    }, 0);
    return grandTotal;
}

const customers: Customer[] = [
    { name: "Alice", isMember: true, purchaseAmount: 1000 },  // 10% off -> 900
    { name: "Bob", isMember: false, purchaseAmount: 500 },    // No discount -> 500
    { name: "Charlie", isMember: true, purchaseAmount: 2000 } // 10% off -> 1800
];

// Expected Output: 3200 (900 + 500 + 1800)
console.log(calculateTotalWithDiscount(customers))

/*
The Customer type consists of three properties: name, isMember, and purchaseAmount.
The calculateTotalWithDiscount function takes an array of Customer objects.
It defines a discountRate constant as 0.10.
It iterates through the input array, applies a discount to customers who are members.
Then, it sums up the purchaseAmount of each customer and returns the grand total.
*/