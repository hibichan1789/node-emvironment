type UserStatus = "online"|"offline"|"away";

type User = {
    id:number;
    name:string;
    status?:UserStatus;
}

function getStatusLabels(users:User[]):string[]{
    return users.map(user => `${user.name} (${user.status?? "unknown"})`);
}

const users: User[] = [
    { id: 1, name: "Alice", status: "online" },
    { id: 2, name: "Bob" }, // Status is missing
    { id: 3, name: "Charlie", status: "away" }
];

console.log(getStatusLabels(users));

/*
parentheses かっこ
*/

/*
The UserStatus type is a union type that allows "online", "offline", or "away".
The User type consists of two required properties (id, name) and an optional property (status).
The getStatusLabels function takes an array of User objects.
It iterates through the array and formats each element into a string.
If the object's status property is undefined, the default status("unknown") is used.
*/