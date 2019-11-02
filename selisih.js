function data (dt1,dt2,dt3){ 
  var arr = "abcdefghijklmnopqrstuvwxyz";
     for(var i=0; i <arr.length; i++){
       if(arr[i] == dt1){
         var tmp = i
       }else if (arr[i] == dt2 ){
         var tmp2 = i
       }else if(arr[i] == dt3){
         var tmp3 = i
       }
}
  
  if(tmp > tmp2){
    var selisih = tmp - tmp2
  }else{
    var selisih = tmp2 - tmp
  }
  if(tmp2 > tmp3){
    var sel = tmp2 - tmp3
  }else{
    var sel = tmp3 - tmp2
  }
  
 if(selisih > sel){
   var cuy = selisih
 }else {
   var cuy = sel
 }
  console.log(cuy)
}

var dt1 = "f";
var dt2 = "a";
var dt3 = "u";

data(dt1,dt2,dt3)
