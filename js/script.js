var btn = document.getElementById('btn1');
var coast = document.getElementById('coast');
var answer = document.getElementById('answer');

btn.addEventListener('click', function () {
    var v1 = parseInt(coast.value) * 2;
    var v2 = 1500;
    var v3 = 1200;
    var v4 = (v1 + v2 + v3) * 0.3; 
    var v5 = coast.value * 0.2 + 400;
    var v6 = 5000;
    var v7 = 3000;
    var ans = v1 + v2 + v3 + v4 + v5 + v6 + v7;
    answer.innerHTML = ans.toFixed(0);
});
