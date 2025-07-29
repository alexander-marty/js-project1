const tasks = [`Task_1`];

//Task from the classes
{
function Add(task){
    tasks.push(task);
};

function Remome(task){
const index = tasks.indexOf(task)
if(index === -1){
    return;
}
tasks.splice(index, 1)
};

function Priority(task){
    const index = tasks.indexOf(task);
    if(index === -1){
    return;
}
    const oldTask = tasks[index];
    tasks.splice(index, 1)
    tasks.unshift(oldTask)
}
}
Add(`Task_2`);
Add(`Task_3`);
console.log(tasks)

Remome(`Task_4`);
console.log(tasks);

Priority(`Task_3`);
console.log(tasks);

console.log(`-------------------------------------------`);

//Update the task from the classes by using DRY principle
// Don't Repeat Yourself

function Remome1(task){
const index = tasks.indexOf(task)
if(index === -1){
    return;
}
return tasks.splice(index, 1)
};

function Priority1(task){
    const result = Remome1(task);
if (!result){
    return;
}
tasks.unshift(result[0]);
}


Add(`Task_20`);
Add(`Task_30`);
console.log(tasks)

Remome1(`Task_20`);
console.log(tasks);

Priority1(`Task_30`);
console.log(tasks);