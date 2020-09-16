class Sprite
{
	constructor(x, y, imageID)
	{
		this.x = x;
		this.y = y;
		this.image = document.getElementById(imageID);

		// -Default Size Values- 
		this.w = 32;
		this.h = 32;

		// -Default Velocity Values-
		this.dx = 0;
		this.dy = 0;
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

	update()
	{
		this.x += this.dx;
		this.y += this.dy;

		// The following code accounts for Sprites bouncing against the canvas walls.
		if (this.x + this.w > 512 || this.x < 0)
			this.dx = -1 * this.dx;

		if (this.y + this.h > 512 || this.y < 0)
			this.dy = -1 * this.dy;
	}

	render(context)
	{
		context.drawImage(this.image, this.x, this.y, this.w, this.h)
	}
}