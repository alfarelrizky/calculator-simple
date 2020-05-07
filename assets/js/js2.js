// let tombol komentar_edukasi
let komentar_edukasi = document.getElementsByTagName('button');
let infokomentar_edukasi = document.getElementsByTagName('span');
let isikomen_edukasi = document.getElementsByTagName('input');

function bukaawal(){
    if (typeof(Storage) !== 'undefined') {
        for (let index = 0; index < infokomentar_edukasi.length; index++) {
            if (localStorage.getItem('view_edukasi'+index) !== null) {
                infokomentar_edukasi[index].innerText = localStorage.getItem('view_edukasi'+index);
            }else{
                localStorage.setItem('view_edukasi'+index,0);
                infokomentar_edukasi[index].innerText = localStorage.getItem('view_edukasi' + index);
            }
        }   
    }
}

bukaawal();

// looping
for (let index = 0; index < komentar_edukasi.length; index++) {
    komentar_edukasi[index].addEventListener('click',function(event){
        if (localStorage.getItem('komentar_edukasi_edukasi'+index) !== null) {
            let angka = 0;
            
            angka = parseInt(localStorage.getItem('komentar_edukasi_edukasi' + index));
            angka +=1;
            localStorage.setItem('komentar_edukasi_edukasi' + index , angka);

            tambah(index,angka);
        }else{
            localStorage.setItem('komentar_edukasi_edukasi'+index,0);
        }
    });
}

function tambah(komentar_edukasi, isi){
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('view_edukasi'+komentar_edukasi,isi);
        infokomentar_edukasi[komentar_edukasi].innerText = localStorage.getItem('view_edukasi'+komentar_edukasi);
        isikomen_edukasi[komentar_edukasi].value='';
    }
}
