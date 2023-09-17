var btn = document.getElementById('btn1');
var coast = document.getElementById('coast');
var num1 = document.getElementById('num-1');
var num2 = document.getElementById('num-2');
var num3 = document.getElementById('num-3');
var num4 = document.getElementById('num-4');
var num5 = document.getElementById('num-5');
var num6 = document.getElementById('num-6');
var num7 = document.getElementById('num-7');
var answer = document.getElementById('answer');

btn.addEventListener('click', function () {
    var v1 = parseInt(coast.value) * 2;
    var v2 = 1500;
    var v3 = 1200;
    var v4 = (v1 + v2 + v3) * 0.3; // формула не правильная?
    var v5 = v1 * 0.2 + 400;
    var v6 = 5000;
    var v7 = 3000;
    var ans = v1 + v2 + v3 + v4 + v5 + v6 + v7;
    num1.innerHTML = v1;
    num2.innerHTML = v2;
    num3.innerHTML = v3;
    num4.innerHTML = v4.toFixed(0);
    num5.innerHTML = v5.toFixed(0);
    num6.innerHTML = v6;
    num7.innerHTML = v7;
    answer.innerHTML = ans;
});