class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			'restitution':1.4,
			'friction':1.0,
			'density':1.0
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(rgb(6,253,199));
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

