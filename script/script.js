let inputAdultos= document.getElementById("adultos");
let inputCriancas= document.getElementById("criancas");
let inputDuracao= document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular(){
  console.log("calculado...")

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value; 
  let duracao = inputDuracao.value;
  let carne = carnePP(duracao)

  let qdtTotalCarne = carne * adultos + (carne/2 * criancas); 
  let qdtTotalCerveja = cervejaPP(duracao) * adultos 
  let qdtTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);
  
  resultado.innerHTML = `<h2>você irá precisar de:</h2>`
  resultado.innerHTML += `<div class="resultado-area"><img src="./assets/carne.svg"/><p>${qdtTotalCarne/1000} Kg de Carne</p>
  </div>`
  resultado.innerHTML += `<div class="resultado-area"><img src="../assets/cerveja.svg"/> <p>${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja </p> </div>`
  resultado.innerHTML += `<div class="resultado-area"><img src="../assets/refri.svg"/> <p>${Math.ceil(qdtTotalBebida/2000)} garrafas de Bebida </p> </div>`
}

function carnePP(duracao){
  if(duracao >= 6){
    return 650;
  } else{
  return 400;
  }
}

function cervejaPP(duracao){
  if(duracao >= 6){
    return 2000;
  }else{
  return 1200;
  }
}

function bebidaPP(duracao){
  if(duracao >= 6){
    return 1500;
  }else{
  return 1000;
}
}
