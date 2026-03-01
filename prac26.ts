type Task = {
    id: number;
    title: string;
    priority: "high" | "low";
    isCompleted: boolean;
};

const tasks: Task[] = [
    { id: 101, title: "Database Migration", priority: "high", isCompleted: false },
    { id: 102, title: "UI Polish", priority: "low", isCompleted: false },
    { id: 103, title: "Auth Header Fix", priority: "high", isCompleted: false },
    { id: 104, title: "Redundant CSS Removal", priority: "high", isCompleted: true },
];

function getPendingHighPriorityTasks(tasks:Task[], isAsc:boolean=false):Task[]{
    const sortValue = isAsc ? 1 : -1
    return tasks.filter(task => task.priority === "high" && !task.isCompleted).toSorted((task1, task2)=>sortValue*(task1.id - task2.id));
}

console.log(tasks);
console.log(getPendingHighPriorityTasks(tasks));
console.log(tasks);

/*
The Task type consists of four properties: id, title, priority, and isCompleted.
The priority property is a union type consisting of either "high" or "low".
The getPendingHighPriorityTasks function takes an array of Task objects and a boolean value (isAsc) as arguments.
The isAsc argument is used as a sort key; it is false by default meaning that the function returns an array in descending order.
The function iterates through the input array and filters each element to extract those whose priority is "high" and isCompleted is false.
Then, it sorts the filtered array based on the isAsc argument.
Finally, it returns a new, sorted, filtered array of Task objects.
*/