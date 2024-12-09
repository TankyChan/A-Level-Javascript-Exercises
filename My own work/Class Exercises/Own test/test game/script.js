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
	walls.drag = 0 ;
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
	pbullet.collider = "none"
	pbullet.speed = 7
	



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
let right = true ;

function draw() {
	clear();
	background(0)
	if (kb.pressing("a"))
	{
		right = false
		if (player.vel.x > -3){
			player.vel.x = -3 ;
		}
		if (kb.presses("o")&&player.colliding(walls)){
			player.vel.x = -7
		}
	}
	else if (kb.pressing("d"))
	{
		right = true
		if (player.vel.x < 3){
			player.vel.x = 3 ;
		}
		if (kb.presses("o")&&player.colliding(walls)){
			player.vel.x = 7
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
	}

	if (kb.presses("i")){
			let pb = new pbullet.Sprite()
			if (right == true){
				pb.x = player.x +18
				pb.y = player.y
				pb.direction = 0;
			}
			else if (right == false){
				pb.x = player.x -18
				pb.y = player.y
				pb.direction = 180;
			
			}
		}

		for (let pbn = 0 ; pbn < pbullet.length ; pbn++){
			if (pbullet[pbn].overlaps(walls)){
				pbullet[pbn].remove
			}
		}




	camera.x = player.x;
	camera.y = player.y;



}