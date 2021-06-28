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
    if(resultado.innerHTML != ''){
        conta.innerHTML = res;
        res = conta.innerHTML.slice(0, -1);
    }else{
        let res = conta.innerHTML.slice(0, -1);
        conta.innerHTML = res;
    }
    return conta.innerHTML;
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

        /* HORA */

let hora = document.getElementById('hora');

setInterval(function(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    h = zero(h);
    m = zero(m);
    hora.innerHTML = `${h}:${m}`;
},1000);

function zero(x){
    if(x < 10){
        x = `0${x}`;
    };
    return x;
};
