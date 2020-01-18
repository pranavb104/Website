let newx,newy;

function setup(){
  var canvas = createCanvas(200, 200);

  canvas.parent('eye-holder');

  //background(255);
}


function draw() {
	
	background(255);
	noStroke();
	move();

	var p = color('#9217a3')
	var f = color('#f7c419')
	var r = color('#eb3b2e')
	fill(f);
	rect(0,0,80,200)
	fill(p);
	polygon(newx,newy,20,14);
	fill(r);
	ellipse(newa,newb,17,13);
	//ellipse(newx,newy, 42,38);
}


function move() {

	 newx = map(mouseX,0,width,(width/2)-12,(width/2)-10);
	 newy = map(mouseY,0,height,(height/2)-1,(height/2)+1);
	
	 newa = map(mouseX,0,width,(width/2)-15,(width/2)-11);
	 newb = map(mouseY,0,height,(height/2)-4,(height/2)+1); 
}

function polygon(x,y,radius,npoints){
	let angle = TWO_PI/npoints;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {//draw each vertex of the polygon
      let sx = x + cos(a) * radius;//math
      let sy = y + sin(a) * radius;//math
      vertex(sx, sy);
    }
    endShape(CLOSE);
}