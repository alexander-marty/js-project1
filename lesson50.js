const tasks = [`task1`, `task2`,`task3`, `task4`,`task5`, `task6`];

for(let i = 0; i < tasks.length; i++){
    console.log(tasks[i]);
}

console.log(`-----------------------------------`);

for(let i = 0; i < tasks.length; i++){
    if(tasks[i] === `task3`){
        continue;
    }
    console.log(tasks[i])
}

console.log(`-----------------------------------`);

for(let i = 0; i < tasks.length; i++){
    if(tasks[i] === `task3`){
        break;
    }
    console.log(tasks[i])
}