// var x=0.1;
// var y=0;
// var z=0;
// let hu=0;
var a=10;
var b=8.0/3.0;
var p=28;
var zp=-80;

var particle,particle1,particle2;
function setup() {
	createCanvas(windowWidth,windowHeight,WEBGL);
	colorMode(HSB);
	particle= new attractor(0.1,0,0,0.005,0);
	particle1= new attractor(0.1,1,1,0.01,25);
	particle2= new attractor(0.1,2,1,0.009,50);


}

function draw() {
	background(0);
	let camX=map(mouseX,0,width,-400,400);
	let camY=map(mouseY,0,height,-400,400);
	camera(camX,camY,height/2.0/tan((PI*30.0)/180.0),0,0,0,0,1,0);
	rotateZ(frameCount * 0.01);

	//var dt=0.005;
	translate(0,0,zp);
	scale(5);
particle.show();
particle1.show();
particle2.show();


}
function mousePressed(){
 zp=map(mouseY,0,250,80,-80);

}
class attractor{
	constructor(x,y,z,dt,color){
		this.x=x;
		this.y=y;
		this.z=z;
		this.dt=dt;
		this.color=color
		this.const=color;
		this.points=new Array();

	}
	show(){
	var dx=(a*(this.y-this.x))*this.dt;
	var dy=(this.x*(p-this.z)-this.y)*this.dt;
	var dz=(this.x*this.y-b*this.z)*this.dt;
	this.x+=dx;
	this.y+=dy;
	this.z+=dz;
	this.points.push(new p5.Vector(this.x,this.y,this.z));
  //scale(5);
	stroke(255);
	noFill();
	this.color=this.const;
	beginShape();
	for(let v of this.points){
		stroke(this.color,255,255);
	vertex(v.x,v.y,v.z);
	this.color+=0.1;
	if(this.color>255){
	this.color=0;
	}
   }
	 endShape();
	}
}
