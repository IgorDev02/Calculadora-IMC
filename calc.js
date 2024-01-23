const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const button = document.getElementById('button');
const resultado = document.getElementById('resultado');

function calcImc(){
    if(nome.value !== '' && altura.value !== '' && peso.value !== ''){
        
        const valorImc = (peso.value / (altura.value * altura.value)).toFixed(1);

        let classificacao = '';

        if (valorImc > 40) {
                classificacao = 'com obesidade grau III. Cuidado!!!';

        } else if (valorImc > 35) {
                classificacao = 'com obesidade grau II.';

        } else if (valorImc > 30) {
                classificacao = 'com obesidade grau I.';

        } else if (valorImc > 25) {
                classificacao = 'levemente acima do peso.';

        } else if (valorImc > 18.5) {
                classificacao = 'com o peso ideal. Parabéns!!!';

        } else if (valorImc < 18.5) {
                classificacao = 'abaixo do peso.';
        }

        resultado.textContent = `${nome.value} seu IMC é ${valorImc} e voçê está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos.';
    }
}

button.addEventListener('click', calcImc);








