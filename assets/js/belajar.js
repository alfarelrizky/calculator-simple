let pertanyaan = confirm('APAKAH KAMU SIAP');
if (pertanyaan == true) {
    // greating
    let na = prompt('nama kamu siapa ?');
    // opening
    alert("keep spirit " + na);    
}else{
    alert("JANGAN MALAS YAH");
    // untuk menutup tab nya;
    close();
}

console.log('selamat belajar javascript yah');

// variabel menggunakan var
var nama ='alfarel';
console.log(nama);

//let lebih bagus dari pada var
let cek=10;
// type of untuk mencari tahu type data yang di miliki oleh suatu variabel
console.log(typeof(cek));


// operator matematika
let a = 5;
let b = 4;

// penambahan
console.log(a + b);
// pengurangan
console.log(a - b);
//pembagian
console.log(a / b);
// perkalian
console.log(a * b);


// increment & decrement

// decrement
let postfix = 5;
console.log(--postfix);
/* output: 4 */

// increment
let prefix = 5;
console.log(++prefix);
/* output: 6 */

// belajar array
let myarray = ['aku' , 'cinta',1000,'kamu'];
console.log(myarray[0]);
console.log(myarray[1]);
console.log(myarray[2]);
console.log(myarray[3]);

// belajar objec
// sifat nya seperti array tapi untuk pemanggilan valuenya tidak seperti array namun menggunakan keyvalue
let myobject= {
    nama :{
        depan : 'alfarel',
        belakang : 'rizqi',
    },
    jeniskelamin : 'lakilaki',
    hobi:'programming'
};

console.log('nama saya ' + myobject.nama.depan + ' ' + myobject.nama.belakang);
console.log('jenis kelamin = '+ myobject.jeniskelamin);
console.log('hobi' + myobject.hobi);

// increment
let angka1 = 6;
let angka2 = 1;

angka1 += angka2;
console.log(angka1);
angka1 -= angka2;
console.log(angka1);
angka1 /= angka2;
console.log(angka1);
angka1 *= angka2;
console.log(angka1);

// conditional
let umurku = 20;
if(umurku <=5){
    console.log('ANDA TERLALU KECIL');
}else if(umurku <= 10){
    console.log('ANDA MASIH KECIL');
}else if(umurku <= 18){
    console.log("ANDA ABG");
}else if(umurku === 20){
    console.log("ANDA PEMUDA");
}else{
    console.log("ANDA ORANG TUA");
}


let cobaarrayloop = ['nama','saya','alfarel','rizqi'];

// looping
// menggunakan for to do
for (let index = 0; index < cobaarrayloop.length; index++) {
    console.log(cobaarrayloop[index]);    
}

// menggunakan for of
for (const output of cobaarrayloop) {
    console.log(output);
}

function mengingatforof(arraynya){
    for(const out of arraynya){
        console.log(out);
    }
}
mengingatforof(cobaarrayloop);

// bab manipulasi DOM
// -document.getElementById(“display”);
// -document.getElementsByName("nama");
// -document.getElementsByClassName("namaclassnya");
// -document.getElementsByTagName("div");
// -document.querySelector(“.button”); untuk memeberi perintah pada button yang urutan paling pertama dari element body di buka
// - document.querySelectorAll('button'); untuk memberiakn perintah pada semua element button


let mengambilid         = document.getElementById('id');
let mengambilname       = document.getElementsByName('satu');
let mengambilelement    = document.getElementsByTagName('div');
let mengambilclass      = document.getElementsByClassName('dua');

// perintah untuk mengubah nilai dari attribute dari suatu element
// perintah ini di buat untuk memberikan value attirbute class pada button AC
let tombolAC = document.querySelector('button');
tombolAC.setAttribute('class','button abu-abu');

let carip = document.getElementsByTagName("p")[0];
// carip.innerText='HALO SEMUANYA';
// carip.innerHTML="<a href='google.com'>link</a>";
// fungsi yang sama dengan innerHTML ialah createElement tapi hanya element tidak termasuk isinya
// let newElement = document.createElement('p');
// newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';
// dan untuk menampilaknnya ke browser dengan perintah
// document.body.appendChild(newElement); dan ini sangat ribet

// menambahkan event listener

let tombol1 = document.getElementById('1');

tombol1.addEventListener('onclick',function (event) {
    let field = document.getElementById('infit');
    field.innerHTML = "value='1'";
});
tombol1.addEventListener('click', function (event) {
    document.querySelector('#count').innerText++;
});