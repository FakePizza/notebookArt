let canScale,cx,cy,startDot,endDot;

let cList = [];

let lines = [];

let cycle = false;

let dotsAmount = 15



function setup() {
  createCanvas(600, 600);
  canScale = height/(dotsAmount + 1);
  for (let i = canScale; i < height; i += canScale){
    for (let j = canScale; j < width; j += canScale){
      cList.push([i,j]);
    }
  }
  console.log(lines.length)
}

function draw() {
  background(1000);
  strokeWeight(10);
  for (let i = canScale; i < height; i += canScale){
    for (let j = canScale; j < width; j += canScale){
      
      fill(0);
      circle(i,j,7);
      
    }
  }
  
  if (cycle){
    line(cList[startDot][0], cList[startDot][1], mouseX, mouseY);

  }
  
  for (let i = 0; i < lines.length; i+=2){
    if (lines.length % 2 == 0){
      line(lines[i][0], lines[i][1], lines[i + 1][0], lines[i + 1][1]);
    } else {
      lines.push([mouseX, mouseY])
      line(lines[i][0], lines[i][1], lines[i + 1][0], lines[i + 1][1]);
      lines.pop();
    }
  }
  
  
}



function getCircleID(){
  
  hDis = canScale/2;
  
  for (let i = 0; i < cList.length; i++){
    
    if (abs(cList[i][0] - mouseX) <= hDis && 
        abs(cList[i][1] - mouseY) <= hDis){
      
      console.log(i);
      return(i)
      
    }
  }
}

function mouseClicked(){
  startDot = getCircleID();
  cycle = !cycle;
  lines.push(cList[startDot]);
  //if (!cycle){
    //endDot = getCircleID();
  //}
}

function keyTyped() {
  if (key === 'z') {
    lines.pop();
    lines.pop();
  }
}
