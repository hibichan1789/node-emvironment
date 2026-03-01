type Task = {
    id: number;
    title: string;
    priority: "high" | "low";
    isCompleted: boolean;
};

const tasks: Task[] = [
    { id: 1, title: "Fix production bug", priority: "high", isCompleted: false },
    { id: 2, title: "Update documentation", priority: "low", isCompleted: false },
    { id: 3, title: "Refactor API logic", priority: "high", isCompleted: true },
    { id: 4, title: "Deploy to staging", priority: "high", isCompleted: false },
];

function getPendingHighPriorityTasks(tasks:Task[]):string[]{
    return tasks.filter(task => task.priority === "high" && !task.isCompleted).map(task => task.title);
}

console.log(getPendingHighPriorityTasks(tasks));

/*
The Task type consists of four properties: id, title, priority, and isCompleted.
The priority property is a Union type consisting of either "high" or "low".
The getPendingHighPriorityTasks function takes an array of Task objects as an argument.
It iterates through the array and filters each element to extract those whose priority is "high" and isCompleted is false.
Then, it transforms the filtered array into a new array of each element's title.
Finally, it returns the new array.
*/