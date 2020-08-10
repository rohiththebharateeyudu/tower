class Hexagon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		polygon = Engine.circle(50,200,20,options);
        world.add(world,polygon);
		

	}
	display()
	{
			var hexapos=this.body.position;		
			push()
			translate(hexapos.x, hexapos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			rectMode(CENTER);
			ellipseMode(RADIUS)
			rect(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}
