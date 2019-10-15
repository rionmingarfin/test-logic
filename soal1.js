function data(loop) {
    var string = '';
    data = loop
    for (var i = 0; i < data; i++) {
        string += '*'
        // string += i
        console.log(string)
    }
}
data(10)

function dat(data) {
    var string = '';
    for (var i = 0; i < data; i++) {
      for(var j=0; j <= i; j++){
       string += j
      }
      for(var k = data; k > j; k--){
        string += 'p'
      }
      for(var l=data; l>i; l--){
        string += l
      }
      for(var m = 0; m<=j; m++){
        string += 'l'
      }
       console.log(string)
       string = ''
    }
}
dat(10)