type Project = {
    id:string;
    name:string;
    budget:number;
    status:Status;
}

type Status = "active"|"completed";

function calculateTotalActiveBudget(projects:Project[]):number{
    return projects.filter(project => project.status === "active").reduce((sum, project)=> sum + project.budget, 0);
}

const projects: Project[] = [
    { id: "p1", name: "Alpha", budget: 1000, status: "active" },
    { id: "p2", name: "Beta", budget: 5000, status: "completed" },
    { id: "p3", name: "Gamma", budget: 2500, status: "active" }
];
console.log(calculateTotalActiveBudget(projects));// Expected Output: 3500 (1000 + 2500)
console.log(calculateTotalActiveBudget([]));
/*
The Status type is a union type(active or completed).
The Project type consists of four properties: id, name, budget, and status(which is based on the Status type).
The calculateTotalActiveBudget function takes an array of objects based on the Project type.
It iterates through the array, filters it to extract a active element, and total each extracted object's budget.
Finally, it returns sum of the budget.
*/