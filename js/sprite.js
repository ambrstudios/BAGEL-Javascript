class Sprite
{
	constructor(x, y, imageID)
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
		this.doesBounce = false;
		this.doesWrap = false;

		// world size
		this.worldWidth = 512;
		this.worldHeight = 512;

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

	setBounce(worldWidth, worldHeight)
	{
		this.worldWidth	= worldWidth;
		this.worldHeight = worldHeight;
		this.doesBounce = true;
	}

	// TODO: finish these
	setWrap()
	{

	}

	setBound()
	{

	}

	bounce()
	{
		// The following code accounts for Sprites bouncing against the canvas walls.
		if (this.x + this.w > this.worldWidth || this.x < 0)
			this.dx = -1 * this.dx;

		if (this.y + this.h > this.worldHeight || this.y < 0)
			this.dy = -1 * this.dy;
	}

	// TODO: update this also with world size variables.
	wrap()
	{
		// The following code has the Sprite wrap to the opposite side of the canvas
		// if it moves past any of the canvas walls.

		// TODO: add comments explaining why not just x = 512?
		if (this.x + this.w < 0)
			this.x = (512 + this.w) + this.x;
		
		if (this.x > 512)
			this.x = this.x - (512 + this.w);

		if (this.y + this.h < 0)
			this.y = (512 + this.h) + this.y;

		if (this.y > 512)
			this.y = this.y - (512 + this.h);
	}

	// TODO: finish this
	bound()
	{

	}

	// TODO: comment this!
	overlaps( otherSprite )
	{
		let noOverlap = this.x > otherSprite.x + otherSprite.w ||
						this.x + this.w < otherSprite.x ||
						this.y > otherSprite.y + otherSprite.h ||
						this.y + this.h < otherSprite.y;

		return !noOverlap;			
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
		
		// TODO: implement this
		if (this.doesBound)
			this.bound();
		
	}

	render(context)
	{
		context.drawImage(this.image, this.x, this.y, this.w, this.h)
	}
}