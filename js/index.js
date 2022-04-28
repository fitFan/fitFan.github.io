function time() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = time.getDate();
    var hour;
    var minutes;
    var seconds;
    var temph = time.getHours();
    if (temph <= 9) {
        hour = '0' + temph;
    }
    else {
        hour = temph;
    }
    var tempm = time.getMinutes();
    if (tempm <= 9) {
        minutes = '0' + tempm;
    }
    else {
        minutes = tempm;
    }
    var temps = time.getSeconds();
    if (temps <= 9) {
        seconds = '0' + temps;
    }
    else {
        seconds = temps;
    }
    document.getElementById('time-year').innerHTML = year;
    document.getElementById('time-month').innerHTML = month + 1;
    document.getElementById('time-day').innerHTML = day;
    document.getElementById('time-hour').innerHTML = hour;
    document.getElementById('time-minutes').innerHTML = minutes;
    document.getElementById('time-second').innerHTML = seconds;
}
window.setInterval('time()', 1000);

var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imgList = document.getElementById('imgList');
var slider = document.getElementById('slider');
var buttons = document.getElementById('buttons');
var index = 0;
var timerIndex = 0;
window.onload = function () {
    var items = document.querySelectorAll('#navigation > li');
    for (var i = 0; i < items.length; i++) {
        items[i].onmouseover = function () {
            var subNav = this.getElementsByTagName('ul')[0];
            if (subNav) {
                subNav.style.display = 'block';
            }
        }
        items[i].onmouseout = function () {
            var subNav = this.getElementsByTagName('ul')[0];
            if (subNav) {
                subNav.style.display = 'none';
            }
        }
    }
    prev.onclick = function () {
        index--;
        if (index < 0) { index = 4; }
        move(index);
        setButton(index);
    }
    next.onclick = function () {
        index++;
        if (index > 4) { index = 0; }
        move(index);
        setButton(index);
    }
    slider.onmouseover = function () {
        clearInterval(timerIndex);
    }
    slider.onmouseout = function () {
        autoplay();
    }
    var bs = buttons.getElementsByTagName('li');
    for (var i = 0; i < bs.length; i++) {
        bs[i].onclick = function () {
            index = this.getAttribute('data-index');
            move(index);
            setButton(index);
        }
    }
}

autoplay();
function autoplay() {
    timerIndex = setInterval('next.onclick()', 2500);
}
function move(index) {
    posLeft = -1 * index * 800;
    imgList.style.marginLeft = posLeft + 'px';
}
function setButton(index) {
    var bs = buttons.getElementsByTagName('li');
    for (var i = 0; i < bs.length; i++) {
        bs[i].style.backgroundColor = 'transparent';
    }
    bs[index].style.backgroundColor = '#eff2f7';
}