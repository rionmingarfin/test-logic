//mencari angka 9
function find(s,arr){
    n = arr.length
    m=0
   if(n %2 === 0){
     m = n/2
   }else{
     m= (n+1) / 2
   }
    
    if(s < arr[m-1]){
      arr = arr.slice(0,m)
       console.log(arr)
      find(s,arr)
    }else if(s > arr[m-1]){
      arr = arr.slice(m,n)
      console.log(arr)
      find(s,arr)
    }else if(s == arr[m-1]){
      console.log(s)
      return
    }
  }
  
  let arr = [1, 5, 8, 9, 11, 13, 15, 19, 21];
  
  find(9,arr)