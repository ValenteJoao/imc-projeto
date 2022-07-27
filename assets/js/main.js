let peso = document.querySelector('.peso');
let altura = document.querySelector('.altura');
let botao = document.querySelector('.btn');
let resultado = document.querySelector('.resultado')

// Funcao responsavel em converter os inputs em numeros e colocar regra da , = .
function convertValores() {
  pesoValor = peso.value
  pesoValor = pesoValor.replace(',', '.')
  pesoValor = Number(pesoValor)

  alturaValor = altura.value
  alturaValor = alturaValor.replace(',', '.')
  alturaValor = Number(alturaValor)


  verifiquePeso = Number.isNaN(pesoValor);
  verifiqueAltura = Number.isNaN(alturaValor);
}

//Funcao que faz o calculo do IMC
function calculoIMC() {
  imc = pesoValor / (alturaValor * alturaValor)
  imc = imc.toFixed(2)
}

//Funcao responsavel em adicionar o html conforme as classificacoes
function classificacao() {

  indicador = ['magreza', 'normal', 'sobrepeso', 'obsedidade', 'obesidade grave']

  if (imc < 18.5) {
    resultadoTela(imc, indicador[0])
  }
  if (imc > 18.5 && imc <= 24.9) {
    resultadoTela(imc, indicador[1])
  }
  if (imc > 24.9 && imc <= 29.9) {
    resultadoTela(imc, indicador[2])
  }

  if (imc > 29.9 && imc <= 39.9) {
    resultadoTela(imc, indicador[3])
  }

  if (imc > 39.9) {
    resultadoTela(imc, indicador[4])
  }

}

//Verifa se o dados do input é valido
function verificarInput() {

  if (verifiquePeso == true) {
    resultado.style.display = 'block'
    resultado.style.background = '#af1f1f'
    resultado.innerHTML = `Peso inválido`
  }

  else if (verifiqueAltura == true) {
    resultado.style.display = 'block'
    resultado.style.background = '#af1f1f'
    resultado.innerHTML = `Altura inválida`
  }
  else {
    resultado.style.background = ''
  }
}

//Funcao que printa o resultado
function resultadoTela(imc, indicador) {
  resultado.style.display = 'block'
  resultado.innerHTML = `Seu IMC é de ${imc} sendo classificado como ${indicador}.`
}

//Funcao ativada com pelo botao
botao.addEventListener('click', () => {
  event.preventDefault();
  convertValores();
  calculoIMC();
  classificacao();
  verificarInput();
}
);

