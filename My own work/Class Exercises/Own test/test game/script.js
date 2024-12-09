let player;
let walls;
let roff ; 
let bullet ;

function setup() {
	new Canvas(500, 250);
	world.gravity.y = 11;

	player = new Sprite(100,100,25,25)
	player.color = "red"
	player.rotationLock=true;
	player.drag = 1;
	player.bounciness = 0;

	walls = new Group();
	walls.w = 50
	walls.h = 50 
	walls.tile= "="
	walls.collider = "static"
	walls.drag = 5 ;
	walls.color = "blue"
	walls.bounciness = 0.1;

	roff = new Group();
	roff.w = 50
	roff.h = 50 
	roff.tile= "-"
	roff.collider = "static"
	roff.color = "yellow"

	pbullet = new Group()
	pbullet.diameter=10
	pbullet.color = "red"
	pbullet.amount = 1 ;
	pbullet.gravity = 0;



	new Tiles(
		["-------------",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...==......=",
		 "=.=.........=",
		 "============="],
		 50,
		 50,
		 walls.w,
		 walls.h,
	)
}
let doublejump = true ;

function draw() {
	clear();
	background(0)
	if (kb.pressing("a"))
	{
		if (player.vel.x > -3){
			player.vel.x = -3 ;
		}
		if (kb.presses("o")&&player.colliding(walls)){
			player.vel.x = -6
		}
	}
	else if (kb.pressing("d"))
	{
		if (player.vel.x < 3){
			player.vel.x = 3 ;
		}
		if (kb.presses("o")&&player.colliding(walls)){
			player.vel.x = 6
		} 
	}
	else if (player.colliding(walls)){
		player.vel.x = 0
	}
	
	if (kb.presses("space")&&(player.colliding(walls)||doublejump))
	{
		if (player.colliding(walls)){
			player.vel.y = -6 ;
		}
		else if (player.collided(walls) == false){
			doublejump = false
			player.vel.y = -5 ;
		}
	}

	if (player.colliding(walls)){
		doublejump = true
		player.drag = 1
	}
	else {
		player.drag = 0
	}

	if (kb.pressed("i")){
		pbullet.x = player.x +15
		pbullet.y = player.y
		pbullet.sleeping = true;
		while (pbullet.colliding(walls)==false){
			pbullet.x += 7
		}
		
	}

	camera.x = player.x;
	camera.y = player.y;



}