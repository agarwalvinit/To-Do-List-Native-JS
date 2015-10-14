var name = "vinitagarwal069@gmail.com";
var pass = "12345678";
var user, pwd ;

function login(){
    user = document.getElementById("input").value;
    pwd = document.getElementById("passwrd").value;
    var label = document.getElementById('lbl');
    label.innerHTML = '';
    if(user == '' || pwd == '' || user == null || pwd == null){
        label.innerHTML = '<p>Fields cannot be empty.</p>';
    } else if(user == name && pwd == pass){
        setTimeout(function(){
            alert('loggedin successfully');
            window.location.assign("index.html");
            }, 1000);
    } else {
        label.innerHTML = '<p>Enter valid details.</p>';
        document.getElementById("input").value ="";
        document.getElementById("passwrd").value ="";
        document.getElementById("input").focus();
    }
}