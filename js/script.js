var a = [12, 43, 213, 75, 'eywr', 'dwaijira', 23, 48, 126, 743, 'programms', 178, 100, 90, 21, 80, 32, 1000];
document.write(a);

function chetNumbers(array) {
    var arrCh = [];
    var arrNch = [];

    for (var i in array) {
        if (!isNaN(array[i])) {
            if (array[i] % 2 == 0) {
                arrNch.push(array[i]);
            } else {
                arrCh.push(array[i]);
            };
        };
    };
    return [arrNch, arrCh];
};

function innerHtmlNumbers() {
    document.write(chetNumbers(a));
};