const roles = [`user`, `admin`, `manager`, `superAdmin`];

const url = `http://127.0.0.1:5500/index.html`
const result1 = url.split(`/`)

console.log(result1);

console.log(roles.join(`, `))