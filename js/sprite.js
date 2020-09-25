class Sprite
{
	constructor(x, y, imageID)
	{
		this.x = x;
		this.y = y;
		this.image = document.getElementById(imageID);

		// -Default Size Values- (width, height)
		this.w = 32;
		this.h = 32;

		// -Default Velocity Values-
		this.dx = 0;
		this.dy = 0;

		// -Default Wall Interaction Values-
		// For testing purposes, all sprites are bouncy by default. Feel free to change when wrapping is implemented
		this.bouncy = true;
		this.wrapping = false;
		// a third setting could be stopping against a wall?
	}

	setSize(w, h)
	{
		this.w = w;
		this.h = h;
	}

	setVelocity(dx, dy)
	{
		this.dx = dx;
		this.dy = dy;
	}

	bounce()
	{
		// The following code accounts for Sprites bouncing against the canvas walls.
		if (this.x + this.w > 512 || this.x < 0)
			this.dx = -1 * this.dx;

		if (this.y + this.h > 512 || this.y < 0)
			this.dy = -1 * this.dy;
	}

	//to be implemented
	wrap()
	{

	}

	update()
	{
		// changes position according to velocity (dx,dy)
		this.x += this.dx;
		this.y += this.dy;

		// causes the sprite to bounce against the wall of the canvas if it is bouncy
		if (this.bouncy)
			this.bounce();

		// causes the sprite to wrap to the other side of the screen if it is 
		// wrap is currently not implemented
		if (this.wrapping)
			this.wrap();
		
		
	}

	render(context)
	{
		context.drawImage(this.image, this.x, this.y, this.w, this.h)
	}
}