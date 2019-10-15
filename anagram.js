function anagram(arr1,arr2){
    let data = {}
    
    for(var i=0; i< arr2.length; i++){
        if(data[arr2[i]]){
          // console.log(data[arr2[i]])
          data[arr2[i]] = data[arr2[i]] + 1
        }else{
          data[arr2[i]] = 1
        }
        console.log("arr2",data[arr2[i]])
    }
    for(var i=0; i< arr1.length; i++){
        if(data[arr1[i]]){
         console.log(data[arr1[i]])
          data[arr1[i]] = data[arr1[i]] - 1
        }else{
          data[arr1[i]] = 1
        }
        // console.log(data[arr1[i]])
    }
    
    console.log(data)
    for(var key in data){
    // console.log(data[key])
    if(data[key] !== 0){
      // console.log("salah")
      return false
    }
     }
     return true
    }
    let arr1 ="budi"
    let arr2 = "udib"
    console.log(anagram(arr1,arr2))

    //polgron
    function balik(str){
    
      let kata= ''
      
      for (i = str.length-1; i >= 0; i-- ) {
        kata += str[i]
      }
      
      
      if(kata==str){
          console.log(true)
      }else{
          console.log(false)
      }
  }
  balik('malikiooikilam')

  //manual
  function balik(str,ard){
    
    let kata= ''
    
    for (i = str.length-1; i >= 0; i-- ) {
      kata += str[i]
    }
    console.log(kata)
    console.log(ard)
    if(kata==ard){
        console.log(true)
    }else{
        console.log(false)
    }
}
balik('maliki','ikilam')