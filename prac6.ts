interface Product{
    id:string;
    name:string;
    stock:number;
}

const sampleProduct:Product[] = [
    {id:"001", name:"coke", stock:200},
    {id:"002", name:"milk", stock:100},
    {id:"003", name:"water", stock:50},
    {id:"004", name:"sample", stock:0},
    {id:"005", name:"aaaa", stock:-10},
]

const productMap = new Map<string, Product>();
sampleProduct.forEach(product=>{
    productMap.set(product.id, product);
});

console.log(productMap);

function updateStock(id:string, amount:number, productMap:Map<string, Product>){
    const targetProduct = productMap.get(id);
    if(!targetProduct){
        throw new Error("product not found");
    }
    targetProduct.stock += amount;
}
function cleanupOutOfStock(productMap:Map<string, Product>):void{
    for(const [id, product] of productMap){
        if(product.stock <= 0){
            productMap.delete(id);
        }
    }
}
cleanupOutOfStock(productMap);
console.log(productMap);