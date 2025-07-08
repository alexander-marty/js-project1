const roles = [`user`, `admin`, `manager`, `admin`];

const elIndex = roles.indexOf(`admin`)
console.log(elIndex);

const elIndex2 = roles.indexOf(`superUser`);
console.log(elIndex2);


if (roles.indexOf(`admin`) >= 0){
    console.log(`Access granted`);
};

console.log(`--------------------------------------`);

console.log(roles.includes(`admin`));

console.log(`--------------------------------------`)

if(roles.includes(`admin`)){
   console.log(`Access granted`) 
}