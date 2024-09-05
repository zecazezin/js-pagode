function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(color(50, 200, 50));
    fill("blue");
    stroke("red")
    textSize(65);
    textAlign(CENTER, CENTER)
    
    let maximo = width;
    let minimo = 0;
    let palavra = "é só uma pagode";
    let quantidade = map(mouseX, 0, width, 15, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,300,200);
    
  //  if(mouseX < 50){
  //    let palavra = "Caminhante";
  //    text(palavra, 200, 200);
  //  } else {
  //    let palavra = "Caminhante";
  //    text(palavra, 200, 200);
  //  }
  }
  