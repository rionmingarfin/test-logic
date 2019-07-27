function data(loop) {
    var string = '';
    data = loop
    for (var i = 0; i < data; i++) {
        string += '*'
        console.log(string)
    }
}
data(10)