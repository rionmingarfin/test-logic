// soal
// Harga saham tiap hari diberikan dalam sebuah array.
// Carilah profit tertinggi yang bisa didapatkan dari memberli dan menjual. Hari beli < Hari Jual.
// Algoritma cukup untuk mencari 1 kali pembelian dan 1 kali penjualan

// Contoh input: [5, 6, 15, 3, 10, 22, 15]
// Contoh output: 19

// Contoh input: [10, 15, 8, 7, 14]
// Contoh Output: 5

// Contoh input: [100, 90, 80, 75, 65]
// Contoh Output: <tidak dapat membeli></tidak>

function saham(danasaham){
    var terbesar = Math.max(...danasaham)
    selisih = []
    var sel,maxProfit
    if( danasaham[0] == terbesar){
      console.log('tidak bisa membeli')
    }else{
   for(var i=0; i< danasaham.length ; i++){
     for( var j = i;  j < danasaham.length; j++){
       if(danasaham[i] < danasaham[j]){
 //         console.log(danasaham[i]) 
 //         console.log(danasaham[j])       
         sel =danasaham[j] - danasaham [i]
         selisih.push(sel)
 //         console.log(sel)
       }
     }
   }
   maxProfit = Math.max(...selisih)
   console.log(maxProfit)
 //   console.log(...selisih)
    }
 }
 
 let hargasaham = [100, 90, 80, 75, 65]
 saham(hargasaham)