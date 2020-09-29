class Sprite
{
	constructor(x, y, imageID, bounces, wraps)
	{
		// The starting point of the Sprite on the canvas in x and y coordinates.
		this.x = x;
		this.y = y;

		// This Sprite's imageID (the ID each image is given when imported at the top of the main HTML file).
		this.image = document.getElementById(imageID);

		// -Default Size Values- (width, height)
		this.w = 32;
		this.h = 32;

		// -Default Velocity Values-
		this.dx = 0;
		this.dy = 0;

		// -Default Wall Interaction Values-
		// Similarly to x, y, and imageID, the main HTML file provides a value (in this case, boolean) for each
		// of the following variables within the Sprite Object creation.
		this.doesBounce = bounces;
		this.doesWrap = wraps;

		// a third setting could be "bound to world (canvas)"
		// might also need to store world size values somewhere...
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

	wrap()
	{
		// The following code has the Sprite wrap to the opposite side of the canvas
		// if it moves past any of the canvas walls.
		if (this.x + this.w < 0)
			this.x = (512 + this.w) + this.x;
		
		if (this.x > 512)
			this.x = this.x - (512 + this.w);

		if (this.y + this.h < 0)
			this.y = (512 + this.h) + this.y;

		if (this.y > 512)
			this.y = this.y - (512 + this.h);
	}

	update()
	{
		// Changes Sprite's position according to velocity (dx,dy).
		this.x += this.dx;
		this.y += this.dy;

		// If doesBounce is true for this Sprite...Sprite will bounce against the designated walls of the canvas.
		if (this.doesBounce)
			this.bounce();

		// If doesWrap is true for this Sprite...Sprite will wrap around to the opposite side of the canvas if it
		// travels past one of the walls.
		if (this.doesWrap)
			this.wrap();
		
		
	}

	render(context)
	{
		context.drawImage(this.image, this.x, this.y, this.w, this.h)
	}
}