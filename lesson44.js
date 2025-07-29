const tasks = [`task_1`, `task_2`, `task_4`, `Task_5`];
let taskName = `task_3`;

const addTask = (taskName) => {tasks.push(taskName)
    return tasks
}

addTask(taskName);

console.log(tasks)

let elementName = `task_3`

deleteElement(elementName)

console.log(tasks)

unshiftElement(`task_6`);

console.log(tasks)

function deleteElement (elementName){
let elmentPosition = tasks.indexOf(elementName);
tasks.splice(elmentPosition)
return tasks
}

function unshiftElement (elementName1){
tasks.unshift(elementName1)
return tasks
}

 

