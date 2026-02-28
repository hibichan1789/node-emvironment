type User = {
    id:number;
    name:string;
    age:number;
}

function sortUserByAge(users:User[], isAscending:boolean=true):User[]{
    const sortValue = isAscending ? 1 : -1;
    const rawUsers = structuredClone(users)
    return rawUsers.sort((user1, user2)=> sortValue*(user1.age - user2.age));
}

const users: User[] = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];


console.log(sortUserByAge(users, true))
console.log(users)


/*
The User type consists of three properties:id, name, and age.
The sortUserByAge function takes an array of user objects and a boolean value.
The boolean value is true by default.
The function duplicates the input array to sort immutably.
If the boolean value is true, it sorts the input array by each element's age in ascending order.
Otherwise, in descending order.
Finally, it returns a new sorted sorted array of user objects.
*/

/*
by default デフォルトで
in ascending order, in descending order
to ensure the operation is immutable ~を確実にする
*/