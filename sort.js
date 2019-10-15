function sort(arr){
  
    if (arr.length < 2) {
      return arr
    }
    else {
      //pivot sama dengan nilai tengah
   let left = []
   let right = []
   //mengmbil nilai akhir(cek)
   let pivot = arr.pop()
    for(var i=0; i< arr.length; i++){
      // console.log(arr[i])
      //jika arr[i](semua index) < sma degan nilai kahir array
      if(arr[i] <= pivot ){
          //masukkin ke kiri
        left.push(arr[i])
      }else{
          //jika lebih besar masuukin kekanan
        right.push(arr[i])
      }
    }
    //fungsi titik 3 mengularkan isi array
    return [...sort(left), pivot,  ...sort(right)]
  
    }
    
    }
  
  let arr = [2,4,2,1,5,3,7,3]
  console.log(sort(arr))