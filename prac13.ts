type Product = {
    name:string;
    price:number;
}

function formatPrice(products:Product[]){
    return products.map(product => {
        if(product.price < 0){
            throw new Error("the product price is invalid");
        }
        const formattedPrice = `$${product.price.toLocaleString()}`;
        return {name:product.name, price:formattedPrice};
    });
}

const sampleProducts:Product[] = [
    {name:"sample", price:1000},
    {name:"sample2", price:900000},
    {name:"sample3", price:999},
]

console.log(formatPrice(sampleProducts));
console.log(formatPrice([{name:"error", price: -1000}]));
/*
The Product type consists of two properties: name and price.
The formaPrice function takes an array of objects based on the Price type.
This iterates through the array, transforms each element into a new object, and returns an array of these objects.
If the price property of the element is smaller than 0, this function throws an error.
*/

/*
Iterate through [collection]: 「〜をループ処理する」。

Transform A into B: 「AをBに変換する」。map の処理を説明する時の鉄板フレーズです。

Less than / Greater than: 「〜より小さい / 〜より大きい」。プログラミングの条件式を説明する時に smaller より好まれます。
*/