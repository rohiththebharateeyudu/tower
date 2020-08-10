class Box{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var boxPos=this.body.position;	
		push()
		translate(boxPos.x, boxPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		rect(CENTER);
		ellipseMode(CENTER);
		rect(0,0,this.r*2, this.r*2)
		pop()
 }
}


  