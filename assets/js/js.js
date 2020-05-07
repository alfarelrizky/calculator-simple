// let tombol komentar
let komentar = document.getElementsByTagName('button');
let infokomentar = document.getElementsByTagName('span');
let isikomen = document.getElementsByTagName('input');

function bukaawal(){
    if (typeof(Storage) !== 'undefined') {
        for (let index = 0; index < infokomentar.length; index++) {
            if (localStorage.getItem('view'+index) !== null) {
                infokomentar[index].innerText = localStorage.getItem('view'+index);
            }else{
                localStorage.setItem('view'+index,0);
                infokomentar[index].innerText = localStorage.getItem('view' + index);
            }
        }   
    }
}

bukaawal();

// looping
for (let index = 0; index < komentar.length; index++) {
    komentar[index].addEventListener('click',function(event){
        if (localStorage.getItem('komentar'+index) !== null) {
            let angka = 0;
            
            angka = parseInt(localStorage.getItem('komentar' + index));
            angka +=1;
            localStorage.setItem('komentar' + index , angka);

            tambah(index,angka);
        }else{
            localStorage.setItem('komentar'+index,0);
        }
    });
}

function tambah(komentar, isi){
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('view'+komentar,isi);
        infokomentar[komentar].innerText = localStorage.getItem('view'+komentar);
        isikomen[komentar].value='';
    }
}
