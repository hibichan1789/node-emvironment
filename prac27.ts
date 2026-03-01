type Task = {
    id: number;
    title: string;
    priority: "high" | "low";
    isCompleted: boolean;
};

const tasks: Task[] = [
    { id: 201, title: "Email Client Setup", priority: "low", isCompleted: false },
    { id: 202, title: "API Key Rotation", priority: "high", isCompleted: true },
    { id: 203, title: "Hotfix: Memory Leak", priority: "high", isCompleted: false },
    { id: 204, title: "Update README", priority: "low", isCompleted: false },
];

function findFirstUrgentTask(tasks:Task[]):Task|undefined{
    const targetTask = tasks.find((task)=>task.priority === "high" && !task.isCompleted);
    return targetTask;
}
console.log(findFirstUrgentTask(tasks));
console.log(findFirstUrgentTask([]));
/*
The Task type consists of four properties: id, title, priority, and isCompleted.
The priority property is a union type consisting of either "high" or "low".
The findFirstUrgentTask function takes an array of Task objects as an argument.
It iterates through the array and finds the first element which matches the criteria; priority is high and isCompleted is false.
If no task which meets the criteria is found, the function returns undefined.
*/