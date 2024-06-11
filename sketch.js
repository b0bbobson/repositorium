function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
   
    stroke("cyan")
    fill("blue")
   
    if (mouseIsPressed) {
      rect(mouseX,mouseY, 20, 35)
      
      
    }
  
  }