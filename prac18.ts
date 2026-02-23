type User = {
    id:number;
    username:string;
    email:string;
}

function getUserEmailsByIds(users:User[], ids:number[]):string[]{
    return users.filter(user => ids.includes(user.id)).map(user => user.email);
}

const userList: User[] = [
    { id: 1, username: "alice", email: "alice@example.com" },
    { id: 2, username: "bob", email: "bob@example.com" },
    { id: 3, username: "charlie", email: "charlie@example.com" }
];

const targetIds = [1, 3, 99]; 
console.log(getUserEmailsByIds(userList, targetIds))
// Expected Output: ["alice@example.com", "charlie@example.com"]

/*
The User type consists of three properties: id, username, and email.
The getUserEmailsByIds function takes an array of User objects and an array of numbers.
It iterates through the array, filter the array to extract the element whose id includes the input array of numbers.
Finally, it returns an array of each extracted element's emails
*/