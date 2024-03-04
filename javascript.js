function verifyPassword() {
    let pwd = document.getElementById('pwd').value;
    let confirmpwd = document.getElementById('confirm-pwd').value;
    if (pwd === ""){
        document.getElementById('message').innerHTML = "*pwd is empty";
    }
    else if (pwd.length < 8) {
        document.getElementById('message').innerHTML = "*must be atleast 8 char"
    }
    else if (pwd !== confirmpwd) {
        document.getElementById('message').innerHTML ="*password doest not match";
    }
    else {
        document.getElementById('message').innerHTML = '';
        document.getElementById('confirmPass').disabled = false;
    }
}