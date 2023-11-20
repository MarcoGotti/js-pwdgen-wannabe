// what  i need
/* 
variable
prompt 
console.log
document.getElementById
innerTEXT
*/

//chiedi nome
const firstName = prompt ('Type your first-name');
console.log (firstName);

//chiedi cognome
const lastName = prompt ('Good! Now type your last-name');
console.log (lastName);

//chiedi colore preferito
const favourite_color = prompt ('One last info: your favourite color');
console.log (favourite_color);

//test console.log
console.log (firstName + lastName + favourite_color + '23');




//stampa in documento
document.getElementById('before-pwd-text').innerHTML = ('Log-in into your account with this generated password');
document.getElementById('generated-password').innerHTML = (firstName + lastName + favourite_color + '23');
document.getElementById('after-pwd-text').innerHTML = ('Once you have logged in you can change it by going on Settings');
document.getElementById('assistance-pwd-text').innerHTML = ('For any problem contact us on luigi.assistance@boolean.it');




//stampa in documento: provo con backtick-stringa con variabile. 
console.log (
    `
    Dear customer, this is your password 
    ${firstName + lastName + favourite_color}23
    `
    );//in console va a capo come in script.js
    
document.getElementById('generated-password-backtick').innerHTML = 
    `
    Dear customer, this is your password: 
    ${firstName + lastName + favourite_color}23
    `; //volevo che andasse a capo in document ma non succede



//stampa in documento: altra prova- per andare a capo devo lavorare su index.html non su script.ls
document.getElementById('backtick2-text').innerHTML = 'Dear cusomer, your password again'    
document.getElementById('generated-password-backtick2').innerHTML = (firstName + lastName + favourite_color + '23');
    