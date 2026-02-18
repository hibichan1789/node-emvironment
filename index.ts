interface User{
    id:number;
    name:string;
    role:Role;
}
enum Role{
    admin="admin",
    user="user"
}

function getLabel(user:User):Role{
    return user.role;
}

const sampleUser:User = {
    id: 1,
    name: "sample",
    role:Role.admin
}

console.log(getLabel(sampleUser));