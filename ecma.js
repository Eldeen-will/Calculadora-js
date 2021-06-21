let conta = document.getElementById('conta');
let equal = document.getElementById('equal');
let back = document.getElementById('back');
let display = document.getElementById('display');
let resultado = document.getElementById('result');
let escolha = '';
let tecla = '';
let res = 0;


let clear = document.getElementById('clear').addEventListener('click', function(){
    limpar();
});

let num = document.querySelectorAll('.btn');
num.forEach((botao) => {
    botao.addEventListener('click', function(n){
       escolha = n.target.innerText;
       continuar();
       conta.innerHTML += escolha;
    });
});

document.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        e.preventDefault();
        if(igual() == undefined){
            resultado.innerHTML = '';
        }else{
            resultado.innerHTML = `= ${res}`;
        };
    }
    else if(e.key == 'Backspace'){
        e.preventDefault();
        apagar();
    }else if(e.key.length <= 1){
        let choice = e.key;
        continuar();
        conta.innerHTML += choice;
    };
});

equal.addEventListener('click', function(){  
    if(igual() == undefined){
        resultado.innerHTML = '';
    }else{
        resultado.innerHTML = `= ${res}`;
    };
});

back.addEventListener('click', function(){
    apagar();
});

function igual(){
    try{
        let result = conta.innerHTML;
        res = eval(result.toString());
        if(result == res);
        return res;
    }catch(error){
        return alert('Conta inválida.');
    };
};

function apagar(){
    let res = conta.innerHTML.slice(0, -1);
    conta.innerHTML = res;
};

function continuar(){
    if(resultado.innerHTML != ''){
        conta.innerHTML = res;
        resultado.innerHTML = '';
    };
};

function limpar(){
    resultado.innerHTML = '';
    conta.innerHTML = '';
};


let hora = document.getElementById('hora');
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
 if(m < 10){
    hora.innerHTML = `${h}:0${m}`;
 }else{
    hora.innerHTML = `${h}:${m}`;
 };