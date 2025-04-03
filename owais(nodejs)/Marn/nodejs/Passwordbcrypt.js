// npm i bcryptjs

let brc = require("bcryptjs");

let user_pass="owaisalam123";
let salt =16;
let hashed_password = brc.hashSync(user_pass, salt);
console.log(`original password: ${user_pass}\n\n bcrypt password: ${hashed_password}`);