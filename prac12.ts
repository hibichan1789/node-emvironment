type User = {
    id:number;
    name:string;
    age:number;
}
function formatUserList(users:User[]):string[]{
    return users.map(user => `User ${user.id}: ${user.name} is ${user.age} ${user.age >= 18 ? "(Adult)": ""}`);
}
const users = [{ id: 1, name: "Alice", age: 25 }, {id:2, name:"sample", age:17}];
console.log(formatUserList(users));

/*
The User type consists of three properties: id(number), name(string), and age(number).
The formatUserList function takes an array of objects based on the User type and returns an array of formatted string.
If the input user's age is 18 or older, the formatted string added (Adult).
*/

/*consist of ~ properties*/