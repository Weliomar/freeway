//ator
let yAtor = 370;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor , 25, 25);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor != 370){
      yAtor +=3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimento,altura, xAtor, yAtor, 15);
    if(colisao){
      somColisao.play();
      voltaAoInicio();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAoInicio(){
  yAtor = 370;

}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,0))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15) {
    meusPontos += 1;
    somPonto.play();
    voltaAoInicio();
    
  }
}