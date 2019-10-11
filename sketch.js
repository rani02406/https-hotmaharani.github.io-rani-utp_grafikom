function setup() {
  createCanvas(835, 800);
}
function draw() { 
background(220,150,87)
textSize(16);
textAlign(RIGHT);
text('Hot Maharani Saragih', 820, 20);
textAlign(CENTER);
text('1717051077', 710, 39);
textAlign(LEFT);
text('UTP Grafika Komputer', 670, 59);

    stroke(100,0,60);
	strokeWeight(8);
	fill(255,23,98);//mickey mouse
	ellipse(65,60,100,100);
	ellipse(245,60,100,100);
	ellipse(155,150,150,150);
  
//jendela kanan

stroke(000,0,60);
fill(400,110,198);
    strokeWeight(10);
    rect(335,30,150,300);
    strokeWeight(5);
    rect(382,75,60,200);
  
//jendela kiri  
stroke(000,0,60);
fill(400,113,198);	
    strokeWeight(10);
    rect(500,30,150,300);
    strokeWeight(5);
    rect(547,75,60,200);
  
//kepala
strokeWeight(3);
fill(0,0,255);
stroke(0,0,0);
arc(350,250,250,255,(130*PI)/180,(410*PI)/180);
fill(255,255,255);
arc(350,270,210,200,(130*PI)/180,(410*PI)/180);
 
fill(255,255,255);
noStroke();
rect(283,300,135,50);
 
//mata kiri
fill(255,255,255);
stroke(0,0,0);
ellipse (330,170, 50, 60); 
fill(0,0,0);
strokeWeight(15);
point(330,180);
 
 //mata kanan
 strokeWeight(3);
fill(255,255,255);
ellipse (385,170, 50, 60);
fill(0,0,0);
strokeWeight(15);
point(380,180);
 
strokeWeight(3);
fill(255,0,0); //hidung
ellipse(357,200,25,20);
line(356,210,356,245);
 
//mulut
arc(350,245,140,180,(0*PI)/180,(180*PI)/180);
arc(350,325,140,115,(215*PI)/180,(325*PI)/180);
line(280,245,420,245);
 
//kumis kiri
line(330,210,290,200);
line(330,220,290,210);
line(330,230,290,220);
 
//kumis kanan
line(378,210,418,200);
line(378,220,418,210);
line(378,230,418,220);
  
//leher
strokeWeight(15);
stroke(255,0,0);
line(255,345,445,345);
  
//lonceng
fill(255,255,0);
strokeWeight(3);
stroke(0,0,0);
ellipse(350,358,25,25);
ellipse(350,365,10,10);
arc(350,356,25,10,(180*PI)/180,(360*PI)/180);
arc(350,360,25,10,(180*PI)/180,(360*PI)/180);

}