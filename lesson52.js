for(let i = 1; i < 5; i++){
   console.log(`Loop 1 - ${i}`) 
   for(let i1 = 1; i1 < 5; i1++){
    console.log(`Loop 2 - ${i1}`) 
   }
}

console.log(`-----------------------`)

const tasks = [[1, `task1`], [2, `task2`]];

for(let i = 0; i < tasks.length; i++){
   for(let i1 = 0; i1 < tasks[i].length; i1++){
    console.log(tasks[i][i1]) 
   }
}