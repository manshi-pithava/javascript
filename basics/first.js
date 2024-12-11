let accountid = 5678; // Can be changed
let email = "mansi@gmail.com";
var password = "356";
city = "halvad"; // If 'city' is not previously declared, this implicitly declares it as a global variable.

accountid = 90;
console.log(accountid);
console.log(email);
console.log(password);
console.log(city);
/*
output:-
>node first.js
90
mansi@gmail.com
356
halvad

*/