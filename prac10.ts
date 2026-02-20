interface Task{
    id:number;
    title:string;
    completed:boolean;
}

class TaskManager{
    private tasks:Task[] = [];

    public addTask(title:string):void{
        const newId = this.getNewId();
        this.tasks.push({id:newId, title, completed:false})
    }
    private getNewId():number{
        const StoredTasks = this.getTasks();
        if(StoredTasks.length === 0){
            return 1;
        }
        return Math.max(...StoredTasks.map(task => task.id)) + 1;
    }
    public toggleTask(id:number):void{
        const targetTask = this.tasks.find(task => task.id === id);
        if(!targetTask){
            return;
        }
        targetTask.completed = !targetTask.completed;
    }
    public getTasks():Task[]{
        return this.tasks;
    }
    public filterTask(completed:boolean):Task[]{
        return this.tasks.filter(task => task.completed === completed);
    }
}

const taskManager = new TaskManager();
taskManager.addTask("sample1");
taskManager.addTask("sample2");
taskManager.addTask("sample3");
console.log(taskManager.getTasks());
taskManager.toggleTask(2);
taskManager.toggleTask(3);
console.log(taskManager.getTasks());
console.log(taskManager.filterTask(false));
console.log(taskManager.filterTask(true));

/*
The Task interface has three properties, id (number), title (string), and completed (boolean).

The TaskManager class has a list of Tasks to store the task and four public methods and one private method.



The private method's details is as follows.

The getNewId method get a stored list of tasks and generate new id.

The new id is the number which is the iterated number of the stored maximal id.



Public methods' details are as follows.

1. addTask

This method takes a title as an argument.

This get new id using the private method.

This stores a new task in the list.

2.toggleTask

This method takes a number as an argument.

This searches for a target task using the input id.

If the task is found, switches the task's isCompleted property.

3. getTasks

This returns all of stored tasks.

4.filterTask

This takes a boolean value (true or false) as an argument.

This filter a list of tasks to extract matches to the input value and returns the list.
*/