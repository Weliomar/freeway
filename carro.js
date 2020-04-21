//Variaveis utilizando listas 
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 102, 150, 210, 270, 320];
let velocidadeCarros = [2, 2.5, 3, 3.5 , 4, 5];
let comprimento = 40;
let altura = 30;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, altura);
  }
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
     //Carros voltam para o inicio da tela
     if(xCarros[i] <= -50){
      xCarros[i] = 600;
    }
  }
}




