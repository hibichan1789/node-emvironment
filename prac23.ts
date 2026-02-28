type Product = {
    id:number;
    name:string;
    category:string;
}

function findProductAndCapitalize(products:Product[], targetId:number):Product|null{
    const targetProduct = products.find(product => product.id === targetId);
    if(!targetProduct){
        return null;
    }
    return {...targetProduct, name:targetProduct.name.toUpperCase()};
}

const products: Product[] = [
    { id: 101, name: "laptop", category: "electronics" },
    { id: 102, name: "chair", category: "furniture" }
];

// Expected Output (for ID 101): { id: 101, name: "LAPTOP", category: "electronics" }

console.log(findProductAndCapitalize(products, 101))
console.log(findProductAndCapitalize(products, 300))
console.log(products)

/*
The Product type consists of three properties: id, name, and category.
The findProductAndCapitalize function takes an array of product objects and a number value as targetId.
It finds a target product object whose id matches the targetId.
If it doesn't find it, it returns null.
Otherwise, it capitalizes the target product's name to transform new product object and returns it.
*/

/*
match は他動詞
*/