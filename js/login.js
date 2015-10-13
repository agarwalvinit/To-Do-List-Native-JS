var name = "vinitagarwal069@gmail.com";
var pass = "12345678";
var user, pwd ;

function login(){
    user = document.getElementById("input").value;
    pwd = document.getElementById("passwrd").value;
    if(user == '' || pwd == '' || user == null || pwd == null){
        alert('fields cannot be empty');
    } else if(user == name && pwd == pass){
        setTimeout(function(){
            alert('loggedin successfully');
            window.location.assign("http://127.0.0.1:60557/index.html");
            }, 1000);
    } else {
        alert('please provide valid details');
        document.getElementById("input").value ="";
        document.getElementById("passwrd").value ="";
        document.getElementById("input").focus();
    }
}