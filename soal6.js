function arkafood(harga,kode,jarak,byrpajak){
    var voucer = ['ARKAFOOD5', 'DITRAKTIRDEMY']
    var harga_akhir = harga
    var ongkir =0
    var diskon = 0
      
      if(kode == voucer[0] && harga >=50000){
        diskon += harga *50/100
        if(diskon > 50000){
          diskon = 50000
        }
      }else if(kode == voucer[1] && harga >=25000){
        diskon += harga*(60/100)
        if(diskon > 30000){
          diskon = 30000
        }
      }
    harga_akhir -= diskon
    
    if(jarak <= 1.5){
      ongkir  +=5000
    }else{
      var biaya_akhir = Math.ceil(jarak-1.5)
      var biaya_ongkir = biaya_akhir * 3000 + 5000
      ongkir += biaya_ongkir
    }
    harga_akhir += ongkir
    if(byrpajak){
      var pajak = harga *5/100
      harga_akhir +=pajak
    }
    
    console.log(harga_akhir)
  }
  
  arkafood('25000','DITRAKTIRDEMY',7,true)
  