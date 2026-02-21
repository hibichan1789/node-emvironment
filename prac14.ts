type User = {
    id:number;
    name:string;
    isAdmin:boolean;
    isActive:boolean;
}

function getActiveAdmins(users:User[]):User[]{
    return users.filter(user => user.isActive && user.isAdmin);
}

const sampleUsers:User[] = [
    {id:1, name:"sample1", isActive:false, isAdmin:true},
    {id:2, name:"sample2", isActive:true, isAdmin:true},
    {id:3, name:"sample3", isActive:true, isAdmin:true}
]

console.log(getActiveAdmins(sampleUsers));

/*
The User type consists of four properties: id, name, isAdmin, and isActive.
The getActiveAdmins function takes an array of objects based on the User type.
It iterates through the array, filters the elements to extract users who meat the criteria, and returns a new array of the matched elements.
*/