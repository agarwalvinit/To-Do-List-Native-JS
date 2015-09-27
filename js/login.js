var name = 'vinitagarwal069@gmail.com';
var pass = '12345678';
var userName = document.getElementById('userName').value;
var password = document.getElementById('passwrd').value;
var form = document.querySelector('form');

form.addEventListener('submit', function(ev){
    if(userName == '' || password == '' || userName == null || password == null){
        alert('fields cannot be empty');
    }
});