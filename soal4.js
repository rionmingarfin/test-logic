function count_vowels(data){
    var vokal = 'aiueoAIUEO';
    var jumlah = 0
    for(var i= 0; i < data.length; i++){
      if(vokal.indexOf(data[i]) !== -1){
       jumlah ++
      }
    }
      return(jumlah)
  }
  console.log(count_vowels('programmer'))