function data(loop) {
    var string = '';
    var data = loop
    for (var i = 0; i < data; i++) {
        for (var j = data; j >= i; j--) {
            string += ' '
        }
        for (var k = 0; k <= i; k++) {
            string += ' *'
        }
        console.log(string)
        string = ''
    }
}
data(10)

function kebalik(loop) {
    var string = '';
    var data = loop
    for (var i = 0; i < data; i++) {
        for (var j = 0; j <= i; j++) {
            string += ' '
        }
       for(var k=i; k<data; k++){
          string += ' p'
       }
        console.log(string)
        string = ''
    }
}
kebalik(10)