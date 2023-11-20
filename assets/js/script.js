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

document.getElementById('before-pwd-text').innerHTML = ('Log-in into your account with this generated password');
document.getElementById('generated-password').innerHTML = (firstName + lastName + favourite_color + '23');
document.getElementById('after-pwd-text').innerHTML = ('Once you have logged in you can change it by going on Settings');
document.getElementById('assistance-pwd-text').innerHTML = ('For any problem contact us on luigi.assistance@boolean.it');

//just trying around: backtick
console.log (
    `
    Dear customer, this is your password 
    ${firstName + lastName + favourite_color}23
    `
    );
    
    document.getElementById('generated-password-backtick').innerHTML = 
    `
    Dear customer, this is your password: 
    ${firstName + lastName + favourite_color}23
    `;

//just trying around: backtick2
document.getElementById('backtick2-text').innerHTML = 'Dear cusomer, your password again'    
document.getElementById('generated-password-backtick2').innerHTML = (firstName + lastName + favourite_color + '23');
    