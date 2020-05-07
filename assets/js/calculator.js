// membuat object calculator untuk main variabel kebutuhan calculator
const calculator = {
    tampilan_angka  : '0',
    operator        : null,
    angka_pertama   : null,
    angka_kedua     : null  
};
const CACHE_KEY = "calculation_history";

function updatelayar(){
    let form = document.getElementById('infit');
    form.setAttribute('value',calculator.tampilan_angka);
}
function clearcalculator(){
    calculator.tampilan_angka   = '0';
    calculator.operator         = null;
    calculator.angka_pertama    = null;
    calculator.angka_kedua      = null;
}
function inputdigit(digit){
    if (calculator.tampilan_angka === '0'){
        calculator.tampilan_angka = '';
    }
    if (calculator.angka_kedua == null) {
        calculator.tampilan_angka += digit;   
        calculator.angka_pertama = calculator.tampilan_angka;
    }else{
        calculator.tampilan_angka += digit;   
        calculator.angka_kedua = calculator.tampilan_angka;
    }
}

function gantistatus(){
    if (calculator.tampilan_angka == '0') {
        return
    }
    calculator.tampilan_angka *= -1;
}
function jedaoperator(operator){
    if (calculator.angka_kedua == null) {
        calculator.operator = operator;
        calculator.angka_kedua = true;
        calculator.angka_pertama = calculator.tampilan_angka;
        calculator.tampilan_angka = '';
        
    }else{
        return;
    }
}
function hitung(){
    if (calculator.operator == '+') {
        calculator.tampilan_angka = parseInt(calculator.angka_pertama) + parseInt(calculator.angka_kedua);        
    }else if (calculator.operator == '-'){
        calculator.tampilan_angka = parseInt(calculator.angka_pertama) - parseInt(calculator.angka_kedua);
    } else if (calculator.operator == '*') {
        calculator.tampilan_angka = parseInt(calculator.angka_pertama) * parseInt(calculator.angka_kedua);
    } else if (calculator.operator == '/') {
        calculator.tampilan_angka = parseInt(calculator.angka_pertama) / parseInt(calculator.angka_kedua);
    } else if (calculator.operator == '%') {
        calculator.tampilan_angka = parseInt(calculator.angka_pertama) % parseInt(calculator.angka_kedua);
    }
}
// memberikan event listener untuk semua button
let tombol = document.getElementsByTagName('button');
for (const button of tombol) {
    button.addEventListener('click',function (event){
        let valuetombol = button.innerText;

        if (valuetombol == 'AC') {
            clearcalculator();
            updatelayar();
            return;
        } else if (valuetombol == '+/-'){
            gantistatus();
            updatelayar();
            return;
        } else if (valuetombol == ':' || valuetombol == '+' || valuetombol == '-' || valuetombol == 'X' || valuetombol == '%'){
            if (valuetombol == ':') {
                jedaoperator('/');
            }else if(valuetombol == 'X'){
                jedaoperator('*');
            }else{
                jedaoperator(valuetombol);
            }
            return;
        }else if (valuetombol == '=') {
            hitung();
            updatelayar();
            proses();//perintah untuk proses history
            clearcalculator();
            return;
        }
        inputdigit(valuetombol);
        updatelayar();
    });
}

// belajar session pada javascript dengan kata kunci getItem dan setItem
// function belajarsession(){
//     let cachekey = "NUMBER";
//     let butt = document.getElementsByTagName("button");
//     let output = document.getElementsByClassName('output')[0];
//     let num = 0;
    
//     // memastikan apakah browser support dengan storage
//     if (typeof(Storage) !== "undefined") {
//         // untuk mengecheck apakah cache key sudah terpakai ?
//         if (sessionStorage.getItem(cachekey) === "undefined") {
//             sessionStorage.setItem(cachekey,0);
//         }else{
//             num = sessionStorage.getItem(cachekey);
//         }
//     }
//     for (i = 0; i < butt.length; i++) {
//         butt[i].addEventListener('click', function (event) {
//             num++;
//             sessionStorage.setItem(cachekey, num);
//             output.innerText = sessionStorage.getItem(cachekey);
//         });
//     }
// }
// belajarsession();




// function belajarlocalstorage(){
//     const tambahhuruf = "STRING"; //ada 3 type data penyimpanan dengan local storage yaitu NUMBER , STRING dan BOOLEAN
//     let tombol = document.getElementsByTagName('button');
//     let out = document.getElementsByClassName('output')[0];
//     let tampil='';

//     // cek support kah local storage di browser
//     if (typeof (Storage) !== "undefined") {
//         if (localStorage.getItem(tambahhuruf) !== null) {
//             tampil = localStorage.getItem(tambahhuruf);
//         }else{
//             localStorage.setItem(tambahhuruf,'');
//             tampil = localStorage.getItem(tambahhuruf);
//         }       
//     }

//     for (let index = 0; index < tombol.length; index++) {
//         tombol[index].addEventListener('click',function(event){
//             tampil += 'a';
//             localStorage.setItem(tambahhuruf,tampil);
//             out.innerText = localStorage.getItem(tambahhuruf);
//         });
//     }
// }
// belajarlocalstorage();


// syntax membuat history
const history = 'calculation_history';

function proses(){
    if (typeof(Storage) !== 'undefined') {
        if (calculator.angka_pertama !== null && calculator.angka_kedua !== null) {
            let operator = null;
            if (calculator.operator === '*') {
                operator = 'x';
            } else if (calculator.operator === '/') {
                operator = ':';
            } else{
                operator = calculator.operator;
            }
            // simpan
            const history_object = {
                angka_pertama : calculator.angka_pertama,
                angka_kedua : calculator.angka_kedua,
                operator : operator,
                result : calculator.tampilan_angka
            };

            simpan(history_object);
        }else{
            console.log('angka tidak terpenuhi');
        }
    }else{
        alert('browser tidak Mendukung Storage');
        return;
    }
}

function simpan(data){
    let temp = null;
    if(typeof(Storage) !== 'undefined'){
        if(localStorage.getItem(history) === null){
            temp = [];
        }else{
            temp = JSON.parse(localStorage.getItem(history));
        }

        temp.unshift(data);

        if (temp.length > 5) {
            temp.pop();
        }

        localStorage.setItem(history,JSON.stringify(temp));
        buka();
    }else{
        alert('browser tidak di dukung dengan Storage');
        return;
    }
}

function buka(){
    if(typeof(Storage) !== 'undefined'){
        let tbody = document.getElementById('historyList');

        // bersihin dulu
        tbody.innerHTML = '';
        let temp_buka = null;
        if(localStorage.getItem(history) !== null){
            temp_buka = JSON.parse(localStorage.getItem(history));
        }else{
            temp_buka = [];
        } 

        // generate hasil
        for (let liat of temp_buka) {
            
            let row = document.createElement('tr');
            
            row.innerHTML = '<td>' + liat.angka_pertama + '</td>';
            row.innerHTML += '<td>' + liat.operator + '</td>';
            row.innerHTML += '<td>' + liat.angka_kedua + '</td>';
            row.innerHTML += '<td>' + liat.result + '</td>';
            // row.setAttribute('style', 'color:black;');

            tbody.appendChild(row);
        }
    }else{
        alert('Web Browser tidak mendukung fungsi Storage');
        return;
    }
}

buka();