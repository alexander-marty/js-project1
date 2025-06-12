const isAdmin = true;
const canWrite = true;

console.log(`System file - ${isAdmin && canWrite}`);
console.log(`Common file - ${isAdmin || canWrite}`);
console.log(`Reverse user rights - ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Edited system file - ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`)

//lesson25

let a = 7;
if (a === -8 || a === 22){
    console.log("You're not a robot")
} else{
    console.log("You are a robot")
}