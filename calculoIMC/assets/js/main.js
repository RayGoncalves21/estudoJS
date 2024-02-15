
const form = document.querySelector('#form');

console.log('js')

form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = classificarImc(imc);
    const msg = `Seu IMC é <b>${imc}</b> e seu nível está <b>${nivelImc}</b>` 
    if (imc <= 18.5){
        setResultado(msg, false)
    }    
    else if (imc <= 23.9 ){
        setResultado(msg, true)
    } 
    else {
        setResultado(msg, false)
    }


});
  

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = criaP(); 
    if (isValid){
        p.classList.add('text-success');
    } else{
        p.classList.add('text-danger');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}

function getIMC(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2)
};

function classificarImc(imc){
    const nivel = ['Abaixo do Peso', 'Normal', 'Sobrepeso', 
    'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Mórbida']
    
    if (imc < 18.5) return nivel[0];    
    if (imc >= 18.5 && imc < 23.9) return nivel[1];
    if (imc >= 23.9 && imc < 24.9) return nivel[2];
    if (imc >= 24.9 && imc < 29.9) return nivel[3];
    if (imc >= 29.9 && imc < 34.9) return nivel[4];
    if (imc >= 34.9) return nivel[5];
    
};


