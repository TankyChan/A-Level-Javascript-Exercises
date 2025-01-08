let playerl;
let playerb ;
let floor;
let roff ; 
let bullet ;
let slash ; 

function setup() {
	new Canvas(500, 250);
	world.gravity.y = 11;

	playerb = new Sprite(100,100,25,20)
	playerb.color = "red"
	playerb.rotationLock=true;
	playerb.drag = 0;
	playerb.bounciness = 0;
	playerb.mass = 0.1

	playerl = new Sprite(100,112.5,25,5)
	playerl.color = "red"
	playerl.rotationLock=true;
	playerl.drag = 0;
	playerl.bounciness = 0;
	playerl.mass = 2

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

	pbullet = new Group()
	pbullet.diameter=10
	pbullet.color = "red"
	pbullet.collider = "none"
	pbullet.speed = 7

	slash = new Group()
	slash.w = 5
	slash.l = 80
	slash.collider = "n"
	



	new Tiles(
		["-------------",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...........=",
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
	player = new GlueJoint(playerb, playerl);

}

let doublejump = true ;
let right = true ;




function draw() {

	clear();
	background(0)
	if (kb.pressing("a"))
	{
		right = false
		if (playerl.vel.x > -3){
			playerl.vel.x = -3 ;
		}
		if (kb.presses("o")&&playerl.colliding(floor)){
			playerl.vel.x = -6
		}
		if (playerb.colliding(floor)&&playerb.colliding(floor)){
			playerl.y += 1
			playerb.y += 1
		}
	}
	else if (kb.pressing("d"))
	{
		right = true
		if (playerl.vel.x < 3){
			playerl.vel.x = 3 ;
		}
		if (kb.presses("o")&&playerl.colliding(floor)){
			playerl.vel.x = 6
		} 
		if (playerb.colliding(floor)&&playerb.colliding(floor)){
			playerl.y += 1
			playerb.y += 1
		}
	}
	else if (playerl.colliding(floor))
	{
			playerl.vel.x = 0 
	}
	
	if (kb.presses("space")&&(playerl.colliding(floor)||doublejump))
	{
		if (playerl.colliding(floor)&&playerb.colliding(floor)){
			playerl.vel.y = -7 ;
			if (right){
				playerl.vel.x = -6
			}
			else {
				playerl.vel.x = +6
			}
		}
		else if(playerl.colliding(floor)&&playerb.colliding(floor)==false){
			playerl.vel.y = -6 ;
		}
		else if (playerl.collided(floor) == false){
			doublejump = false
			playerl.vel.y = -5 ;
		}
	}

	if (playerl.colliding(floor)||playerb.colliding(floor))
	{
		doublejump = true
	}

	if (kb.presses("i"))
	{
			let pb = new pbullet.Sprite()
			if (right == true){
				if (playerl.colliding(floor)&&playerb.colliding(floor)){
					pb.x = playerb.x -18
					pb.y = playerb.y
					pb.direction = 180;
				}
				else {
					pb.x = playerb.x +18
					pb.y = playerb.y
					pb.direction = 0;
				}
			}
			else if (right == false){
				if (playerl.colliding(floor)&&playerb.colliding(floor)){
					pb.x = playerb.x + 18
					pb.y = playerb.y
					pb.direction = 0;
				}
				else{
					pb.x = playerb.x -18
					pb.y = playerb.y
					pb.direction = 180;
				}
			}
		}

		for (let pbn = 0 ; pbn < pbullet.length ; pbn++) {
			if (pbullet[pbn].overlaps(floor)||pbullet[pbn].x>playerb.x+300){
				pbullet[pbn].remove()
				pbn -= 1
			}
			if (pbn>3){
				pbullet[pbn].remove()
			}}
	

	if (kb.presses("u")){
		let slashing = new slash.Sprite()
		slashing.offset.y = 30
		slashing.y = playerb.y
		if (right === true){
			slashing.rotation = 225
			slashing.x = playerb.x + 15
			slashing.rotate(90,8)
			for (let slashnum = 0 ; slashnum < slash.length ; slashnum++) {
				if (slash[slashnum].rotation >= 310){
					slash[slashnum].remove()
					slashnum -= 1
				}
			}
		}
	}

	camera.x = playerb.x;
	camera.y = playerb.y;

}


