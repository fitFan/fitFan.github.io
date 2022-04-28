function clearInfo1() {
    var Info = document.getElementById('l-username');
    Info.innerHTML = '用户名';
    Info.style.color = '#0f0';
}
function check1() {
    var Info = document.getElementById('l-username');
    var username;
    username = document.getElementById('username').value;
    if (username == "") {
        Info.innerHTML = "用户名不能为空";
        Info.style.color = '#f00';
        return false;
    }
    if (username.length <= 3 || username.length >= 12) {
        Info.innerHTML = "用户名必须大于3个字符，小于12个字符";
        Info.style.color = '#f00';
        return false;
    }
    var letters = "*#$&";
    for (var i = 0; i < username.length; i++) {
        var char = username[i];
        if (letters.indexOf(char) > -1) {
            Info.innerHTML = '用户名不能含有*、#， $、&符号';
            Info.style.color = '#f00';
            return false;
        }
    }
}
function clearInfo2() {
    var Info = document.getElementById('l-password');
    Info.innerHTML = '密码';
    Info.style.color = '#0f0';
}
function check2() {
    var Info = document.getElementById('l-password');
    var password;
    password = document.getElementById('password').value;
    if (password == "") {
        Info.innerHTML = "密码不能为空";
        Info.style.color = '#f00';
        return false;
    }
    if (password.length < 6 || password.length > 16) {
        Info.innerHTML = "密码必须大于6个字符，小于16个字符";
        Info.style.color = '#f00';
        return false;
    }
    var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
    if (!reg.test(password)) {
        Info.innerHTML = '密码必须包括字母和数字';
        Info.style.color = '#f00';
        return false;
    }
}
function clearInfo3() {
    var Info = document.getElementById('l-repassword');
    Info.innerHTML = '确认密码';
    Info.style.color = '#0f0';
}
function check3() {
    var Info = document.getElementById('l-repassword');
    var repassword;
    repassword = document.getElementById('repassword').value;
    if (repassword == "") {
        Info.innerHTML = "确认密码不能为空";
        Info.style.color = '#f00';
        return false;
    }
    var password;
    password = document.getElementById('password').value;
    if (password != repassword) {
        Info.innerHTML = '密码不一致';
        Info.style.color = '#f00';
        return false;
    }
}
function clearInfo4() {
    var Info = document.getElementById('l-email');
    Info.innerHTML = '邮箱';
    Info.style.color = '#0f0';
}
function check4() {
    var Info = document.getElementById('l-email');
    var email;
    email = document.getElementById('email').value;
    if (email == "") {
        Info.innerHTML = "邮箱不能为空";
        Info.style.color = '#f00';
        return false;
    }
    var ereg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    if (!ereg.test(email)) {
        Info.innerHTML = '邮箱不正确';
        Info.style.color = '#f00';
        return false;
    }
}