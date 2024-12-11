let player;
let floor;
let roff ; 
let bullet ;
let walls ;

function setup() {
	new Canvas(500, 250);
	world.gravity.y = 11;

	player = new Sprite(100,100,25,25)
	player.color = "red"
	player.rotationLock=true;
	player.drag = 0;
	player.bounciness = 0;

	floor = new Group();
	floor.w = 50
	floor.h = 50 
	floor.tile= "="
	floor.collider = "static"
	floor.drag = 0 ;
	floor.color = "blue"
	floor.bounciness = 0.1;

	roff = new Group();
	roff.w = 50
	roff.h = 50 
	roff.tile= "-"
	roff.collider = "static"
	roff.color = "yellow"

	walls = new Group();
	walls.w = 1
	walls.h = 50
	walls.color = "green"
	walls.collider = "none"

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
		 floor.w,
		 floor.h,

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
		if (kb.presses("o")&&player.colliding(floor)){
			player.vel.x = -6
		}
	}
	else if (kb.pressing("d"))
	{
		right = true
		if (player.vel.x < 3){
			player.vel.x = 3 ;
		}
		if (kb.presses("o")&&player.colliding(floor)){
			player.vel.x = 6
		} 
	}
	else if (player.colliding(floor)){
		player.vel.x = 0
	}
	
	if (kb.presses("space")&&(player.colliding(floor)||doublejump))
	{
		if (player.colliding(floor)){
			player.vel.y = -6 ;
		}
		else if (player.collided(floor) == false){
			doublejump = false
			player.vel.y = -5 ;
		}
	}

	if (player.colliding(floor)){
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

		for (let pbn = 0 ; pbn < pbullet.length ; pbn++) {
			if (pbullet[pbn].overlaps(floor)){
				pbullet[pbn].remove()
				pbn -= 1
			}
			if (pbn>3){
				pbullet[pbn].remove()
			}
		}




	camera.x = player.x;
	camera.y = player.y;



}