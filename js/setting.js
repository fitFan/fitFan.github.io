function clearInfo5() {
    var Info = document.getElementById('l-username');
    Info.innerHTML = '昵称';
    Info.style.color = '#0f0';
}
function check5() {
    var Info = document.getElementById('l-username');
    var username;
    username = document.getElementById('username').value;
    if (username == "") {
        Info.innerHTML = "昵称不能为空";
        Info.style.color = '#f00';
        return false;
    }
}