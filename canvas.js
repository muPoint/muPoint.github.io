var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; /*size of canvas*/
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); /*defines possibilities for this canvas*/

// store mouse coordinates
var mouse={
	x:undefined,
	y:undefined
	}

var maxRadius=250;
var minRadius=10;

var colorArray=["blue", "white", "green", "black"];

// Add event - mouse

window.addEventListener('mousemove',
	function(event) {
	mouse.x=event.x;
	mouse.y=event.y;	
	//console.log(mouse);
	}
)

window.addEventListener('resize', 
	function() {
		canvas.width = window.innerWidth; /*size of canvas*/
		canvas.height = window.innerHeight;
	 })
	 
//Random Circles

function Circle(x,y,dx,dy, radius) {
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
	
	this.draw=function() {
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
	//	c.strokeStyle = "blue";
		c.strokeStyle=this.color;
		c.stroke();
	}
	
	this.update=function() {
		if (this.x+this.radius>innerWidth || this.x-this.radius<0){
			this.dx=-this.dx;
		}
	
		if (this.y+this.radius>innerHeight || this.y-this.radius<0){
			this.dy=-this.dy;
		}
		
		this.x+=this.dx;
		this.y+=this.dy;	
		
		//Interactivity
		if(mouse.x-this.x<50 && mouse.x-this.x>-50 &&
			mouse.y-this.y<50 && mouse.y-this.y>-50) {
			if (this.radius<maxRadius){
				this.radius+=1;
				}
			//this.radius+=1;
			}
			
		else if (this.radius> minRadius){
			this.radius -=1;
			}
		
		this.draw();
	}
}

var circleArray = [];

for (var i=0;i<10;i++) {
	var x=Math.random()*(innerWidth-radius*2)+radius;
	var y=Math.random()*(innerHeight-radius*2)+radius;
	var dx=(Math.random()-0.5)*2; /*speed of movement*/
	var dy=(Math.random()-0.5)*2;
	var radius=Math.random()*3+1;
	
	circleArray.push(new Circle(x,y,dx,dy,radius));
}

	//var circle=new Circle(200,200,3,3,30); replaced by previous line
	
function animation() {
	requestAnimationFrame(animation);
	c.clearRect(0,0,innerWidth,innerHeight);// -> clear screen everytime
	
	
	for (var i=0;i<10;i++){
		circleArray[i].update();
		c.fillRect(100,100,100,100);
	}
	
	// circle.update();
	
}	
animation();
