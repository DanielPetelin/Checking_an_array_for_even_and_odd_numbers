var a = 123;

document.getElementById('chet').onclick = function(v) {
    if (a % 2 == 0) {
        document.getElementById('out').innerHTML = 'чётное';
    } else {
        document.getElementById('out').innerHTML = 'нечётное';
    }
};