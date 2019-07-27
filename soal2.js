function data(loop) {
    var string = '';
    var data = loop
    for (var i = 0; i < data; i++) {
        for (var j = data; j > i; j--) {
            string += '*'
        }
        console.log(string)
        string = ''
    }
}
data(10)
