interface Item{
    id:number;
    name:string;
    stock:number;
}

function updateStock(items:Item[], targetId:number, amount:number):Item[]{
    return items.map(item => {
        if(item.id === targetId){
            return {...item, stock:item.stock + amount};
        }
        return item;
    });
}

const sampleItems:Item[] = [
    {id:1, name:"sample1", stock:10},
    {id:2, name:"sample2", stock:20},
    {id:3, name:"sample3", stock:30}
]

const updatedItems1 = updateStock(sampleItems, 2, 10);
console.log(updatedItems1);
const updatedItems2 = updateStock(updatedItems1, 10, 100);
console.log(updatedItems2);

/*
The Item interface consists of three properties: id, name, and stock.
The updateStock function takes an array of objects base on the item interface, a targetId(number), and an amount(number).
It iterates through the array, search for the item whose id matches to the input targetId.
If the target item is not found, it returns the input array.
Otherwise, it adds the item stock by the input amount, and returns an new converted array of objects.
*/

/*
[] match to [] 自動詞らしい
*/