interface Sale{
    productName:string;
    price:number;
    quantity:number;
}
type SaleStats = {
    totalAmount:number;
    count:number;
}

const sales:Sale[] = [
    {productName: "PC", price:1000, quantity:2},
    {productName: "TV", price:2000, quantity:1},
    {productName: "radio", price:200, quantity:4},
    {productName: "PC", price:2000, quantity:3},
    {productName: "radio", price:300, quantity:10}
]

const salesStats = new Map<string, SaleStats>();
sales.forEach(sale => {
    const storedStats = salesStats.get(sale.productName);
    if(!storedStats){
        salesStats.set(sale.productName, {totalAmount:sale.price*sale.quantity, count:sale.quantity});
        return
    }
    const updatedTotalAmount = storedStats.totalAmount + sale.price*sale.quantity;
    const updatedCount = storedStats.count + sale.quantity;
    const updatedStats:SaleStats = {totalAmount:updatedTotalAmount, count:updatedCount};
    salesStats.set(sale.productName, updatedStats);
});
salesStats.forEach(sale => {
    console.log(sale);
});