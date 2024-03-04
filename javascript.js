function verifyPassword() {
    let pwd = document.getElementById('pwd').value;
    let confirmpwd = document.getElementById('confirm-pwd').value;
    if (pwd === ""){
        document.getElementById('message').innerHTML = "*pwd is empty";
    }
    else if (pwd.length < 8) {
        document.getElementById('message').innerHTML = "*must be atleast 8 char"
        document.getElementById('confirmPass').disabled = true;
        
    }
    else if (pwd.length >= 8 && confirmpwd == ""){
        document.getElementById('message').innerHTML = '';
    }
    else if (pwd !== confirmpwd) {
        document.getElementById('message2').innerHTML ="*password does not match";
        document.getElementById('confirmPass').disabled = true;
    }
    else {
        document.getElementById('message').innerHTML = '';
        document.getElementById('message2').innerHTML = '';
        document.getElementById('confirmPass').disabled = false;
    }
}