let playerl;
let playerb ;
let floor;
let bullet ;
let slash ; 
let slashing
let health_point 
let enemy,enemy_s,enemy_b
let block

function setup() {
	new Canvas(750, 375);
	world.gravity.y = 11;

	playerb = new Sprite(100,100,25,20)
	playerb.color = "red"
	playerb.rotationLock=true;
	playerb.drag = 0;
	playerb.bounciness = 0;
	playerb.mass = 2

	playerl = new Sprite(100,112.5,25,5)
	playerl.color = "red"
	playerl.rotationLock=true;
	playerl.drag = 0;
	playerl.bounciness = 0;
	playerl.mass = 1

	block = new Group()

	floor = new block.Group();
	floor.w = 50
	floor.h = 50 
	floor.tile= "="
	floor.collider = "static"
	floor.drag = 0 ;
	floor.color = "blue"
	floor.bounciness = 0.1;


	pbullet = new Group()
	pbullet.diameter=10
	pbullet.color = "red"
	pbullet.collider = "none"
	pbullet.speed = 7

	slash = new Group()
	slash.w = 5
	slash.h = 40
	slash.collider = "n"
	slash.offset.y = 30 
	slash.color = "red"

	health_point = new Group()
	health_point.w = 15
	health_point.h = 2
	health_point.collider= "n"
	health_point.color = "yellow"

	enemy = new Group()
	enemy.color ="purple"

	enemy_s = new enemy.Group()
	enemy_s.w = 25
	enemy_s.h = 25
	enemy_s.amount = 1
	enemy_s.rotationLock =true

	enemy_b = new enemy.Group()
	enemy_b.diameter=10
	enemy_b.collider = "none"
	enemy_b.speed = 7
	

	



	new Tiles(
		[".............",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...........=",
		 "=...........=",
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
let right_slash = true
let health = 25
let gameover = false 
let enemy_hp = []

function draw() {

	clear();
	background(0)
	camera.x = playerb.x;
	camera.y = playerb.y;
	if (gameover == false){
	if (kb.pressing("a"))
	{
		right = false
		if (playerl.vel.x > -3){
			playerb.vel.x = -4.5 ;
		}
		if (kb.presses("o")&&playerl.colliding(floor)){
			playerb.vel.x = -7
		}
		if (playerb.colliding(floor)&&playerb.colliding(floor)){
			playerb.y += 1
			playerl.y += 1
		}
	}
	else if (kb.pressing("d"))
	{
		right = true
		if (playerl.vel.x < 3){
			playerb.vel.x = 4.5 ;
		}
		if (kb.presses("o")&&playerl.colliding(floor)){
			playerb.vel.x = 7
		} 
		if (playerb.colliding(floor)&&playerb.colliding(floor)){
			playerl.y += 1
			playerb.y += 1
		}
	}
	else if (playerl.colliding(floor))
	{
			playerb.vel.x = 0 
	}
	
	if (kb.presses("space")&&(playerl.colliding(floor)||doublejump))
	{
		if (playerl.colliding(floor)&&playerb.colliding(floor)){
			playerb.vel.y = -10 ;
			if (right){
				playerb.vel.x = -8
			}
			else {
				playerb.vel.x = +8
			}
		}
		else if(playerl.colliding(floor)&&playerb.colliding(floor)==false){
			playerb.vel.y = -8 ;
		}
		else if (playerl.collided(floor) == false){
			doublejump = false
			playerb.vel.y = -7.5 ;
		}
	}

	if (playerl.colliding(floor))
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
			if (pbullet[pbn].overlaps(floor)||pbullet[pbn].x>playerb.x+300||pbullet[pbn].x<playerb.x-300){
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
		slashing.life = 20
		if (right === true){
			if (playerl.colliding(floor)&&playerb.colliding(floor)){
				slashing.x = playerb.x -10
				slashing.rotation = 135
				slashing.rotate(-90,10)
				right_slash = false
			}
			else{
				slashing.x = playerb.x +10
				slashing.rotation = 225
				slashing.rotate(90,10)
				right_slash = true  
			}
		}
		if (right === false){
			if (playerl.colliding(floor)&&playerb.colliding(floor)){
				slashing.x = playerb.x +10
				slashing.rotation = 225
				slashing.rotate(90,10)
				right_slash = true  
			}
			else{
				slashing.x = playerb.x -10
				slashing.rotation = 135
				slashing.rotate(-90,10)
				right_slash = false
			}
		}
	}
	for (let psl = 0 ; psl < slash.length ; psl++) {
		if (psl>0){
			slash[psl].remove()
		}
		if (right_slash == true ){
			slash[psl].x = playerb.x +10
			slash[psl].y = playerb.y
		}
		else {
			slash[psl].x = playerb.x -10
			slash[psl].y = playerb.y
		}
		if (kb.released("u")){
			slash[psl].remove()
		}
	}

	if (playerl.collides(enemy)||playerb.collides(enemy)||enemy_b.overlaps(playerb)||enemy_b.overlaps(playerl)){
		health -= 1
	}
	if (health > 0){
	health_point.amount = health
	health_point[0].x = camera.x - 350
	health_point[0].y = camera.y - 50
	for (let hp = 1 ; hp < health ; hp++){
		health_point[hp].x = camera.x - 350
		health_point[hp].y = health_point[0].y -4*hp
	}
	}
	else {
		gameover = true
	}

	if (gameover == true ){
		let gg = new Sprite
		gg.w = 1
		gg.h = 1
		gg.collider = "n"
		gg.color = "black"
		gg.textSize = 100
		gg.x = camera.x
		gg.y = camera.y
		gg.text = "GAME OVER"
		gg.textColor = "red"
	}

}

if (enemy_hp.length<enemy_s.length){
	enemy_hp.push (5)
}

for (let enemy_s_num = 0 ; enemy_s_num < enemy_s.length ; enemy_s_num++){
	
	if (slash.overlaps(enemy_s[enemy_s_num])){
		enemy_hp[enemy_s_num] = enemy_hp[enemy_s_num]-2
	}
	for (let pbn = 0 ; pbn < pbullet.length ; pbn++){
		if(pbullet[pbn].overlaps(enemy)){
			enemy_hp[enemy_s_num] = enemy_hp[enemy_s_num]-1
			pbullet[pbn].remove()
		}
	}
	if (enemy_hp[enemy_s_num]<1){
		enemy_hp.splice(enemy_s_num,1)
		enemy_s[enemy_s_num].remove()

	}
	if (enemy_s.length>0){
		if ((playerb.x-enemy_s[enemy_s_num].x)>100||(playerb.x-enemy_s[enemy_s_num].x)<-100){
			enemy_s[enemy_s_num].vel.x = 2*Math.cos(frameCount*0.05)
		}
		else{
			let eb = new enemy_b.Sprite()

			for (let ebn = 0 ; ebn < enemy_b.length ; ebn++) {
				if ((playerb.x-enemy_s[enemy_s_num].x)<100&&(playerb.x-enemy_s[enemy_s_num].x)>0){
					eb.direction = 0
					eb.x = enemy_s[enemy_s_num].x + 10
					eb.y = enemy_s[enemy_s_num].y
				}
				if (enemy_b[ebn].overlaps(floor)||enemy_b[ebn].overlaps(playerb)||(enemy_b[ebn].x-camera.x)>400){
					enemy_b[ebn].remove()
					ebn -= 1
				}
				if (ebn>3){
					enemy_b[ebn].remove()
				}
			}
		}
	}
	
}





}

