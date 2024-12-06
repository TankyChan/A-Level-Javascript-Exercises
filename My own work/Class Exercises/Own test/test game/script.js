let player;
let walls;

function setup() {
	new Canvas(1000, 1000);
	world.gravity.y = 11;
	player = new Sprite(100,100,25,25)
	player.color = "red"
	player.rotationLock=true;
	player.drag = 1;

	walls = new Group();
	walls.w = 50
	walls.h = 50 
	walls.tile= "="
	walls.collider = "static"
	walls.drag = 10 ;

	new Tiles(
		["==========",
		 "=........=",
		"=........=",
		"=...==...=",
		"=.=......=",
		"=========="],
		50,
		50,
		walls.w,
		walls.h,
	)
}

function draw() {
	clear();
	background(0)
	if (kb.pressing("a"))
	{
		player.x -= 3 ;
		if (kb.presses("space")&&player.colliding(walls))
		{
			player.vel.y = -6 ;
		}
	}
	else if (kb.pressing("d"))
	{
		player.x += 3 ;
		if (kb.presses("space")&&player.colliding(walls))
		{
			player.vel.y = -6 ;
		}
	}
	else if (kb.presses("space")&&player.colliding(walls))
	{
		player.vel.y = -6 ;
	}
}