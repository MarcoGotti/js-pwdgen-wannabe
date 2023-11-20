// what  i need
/* 
variable
prompt 
console.log
document.getElementById
innerTEXT
*/


const firstName = prompt ('Type your first-name');
console.log (firstName);

const lastName = prompt ('Good! Now type your last-name');
console.log (lastName);

const favourite_color = prompt ('One last info: your favourite color');
console.log (favourite_color);

console.log (firstName + lastName + favourite_color + '23');

document.getElementById('before-pwd-text').innerHTML = ('Log-in into your account again with this generated password');
//`Dear customer, with this password you can enter your account again ${firstName + lastName + favourite_color}23`;
document.getElementById('generated-password').innerHTML = (firstName + lastName + favourite_color + '23');
document.getElementById('after-pwd-text').innerHTML = ('Once you have logged in you can change it and make it safer by going on Settings');