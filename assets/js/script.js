// what  i need
/* 
variable
prompt 
*/


const firstName = prompt ('Type your first-name');
console.log (firstName);

const lastName = prompt ('Good! Now type your last-name');
console.log (lastName);

const favourite_color = prompt ('One last info: your favourite color');
console.log (favourite_color);

console.log (firstName + lastName + favourite_color + '23');

document.getElementById('generated-password').innerHTML = (firstName + lastName + favourite_color + '23');