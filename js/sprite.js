class Sprite
{
	constructor(x, y, imageID)
	{
		this.x = x;
		this.y = y;
		this.image = document.getElementById(imageID);
		// default size values 
		this.w = 32;
		this.h = 32;
		// default velocity values
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
		// add code for bouncing off the walls
		if (this.x + this.w > 512)
			this.dx = -1 * this.dx;

		if (this.x < 0)
			this.dx = -1 * this.dx;
	}

	render(context)
	{
		context.drawImage(this.image, this.x, this.y, this.w, this.h)
	}
}