// var penumpang =[];
// var tambahPenumpang = function(namaPenumpang, penumpang){
//     //jika angkot kosong
//     if (penumpang.length == 0){
//         //tambah penumpang di awal array
//         penumpang.push(namaPenumpang);
//         return penumpang;
//     } else{
//         //telusuri kursi
//         for (var i=0; i < penumpang.length; i++) {
//             //jika ada kursi kosong
//             if (penumpang[i]==undefined) {
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             }

//             //kalo gada kosong dia nambah dibelakang
//             else if (i == penumpang.length -1){
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//             else if (penumpang[i]==namaPenumpang){
//                 console.log(namaPenumpang + 'dh ada')
//                 return penumpang;
//             }
//         }
//     }
// }

// var hapusPenumpang = function(namaPenumpang, penumpang){
//     if (penumpang.length == 0) {
//         console.log("kosong ngab");
//         return penumpang;
//     } else{
//         for (var i = 0 ; i < penumpang.length; i ++) {
//             if(penumpang[i]==namaPenumpang){
//                 penumpang[i] = undefined;
//                  return penumpang;
//              } else if(i == penumpang.length -1){
//                  console.log(namaPenumpang +'g ada');
//                  return penumpang;
//              } 
//         }
//     }
// }


function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir =sopir;
    this.trayek=trayek;
    this.penumpang=penumpang;
    this.kas= kas;
    this.penumpangNaik = function(namaPenumpang){
        if (this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }
        else{
            for (var i = 0; i <this.penumpang.length; i++) {
                if (penumpang[i]==undefined) {
                    penumpang[i] = namaPenumpang;
                    return this.penumpang;
                }
            
                else if (penumpang[i]==namaPenumpang){
                    console.log(penumpang[i] + ' dh ada');
                    return this.penumpang;
                }
                else if (i == this.penumpang.length -1){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        
        }
    }
    this.penumpangTurun = function(namaPenumpang, bayar){
        if (this.penumpang.length == 0) {
            alert('angkot kosong')
            return false;
        }
        for (var i = 0; i <this.penumpang.length; i++) {
            if(penumpang[i]==namaPenumpang){
                penumpang[i]=undefined;
                this.kas+=bayar;
                return this.penumpang;
            }
            
        }
    }
}

var angkot1 = new Angkot ('marta', ['padurenan', 'setu'],[],0);