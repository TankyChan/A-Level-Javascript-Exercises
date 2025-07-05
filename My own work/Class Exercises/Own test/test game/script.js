let playerl
let playerb 
let floor
let bullet 
let slash 
let slashing
let health_point 
let enemy,enemy_s,enemy_b, enemy_f
let block
let player
let button, start, restart
let gg
let level_button

let doublejump = true 
let right = true 
let right_slash = true
let gameover = false 
let health = 25
let enemy_hp = []
let last_eb_frame = []
let last_hit_frame = -480
let settedup = false
let restart_menu_setted = false
let game_start = false
let menu_setted = false
let choose_level = false
let last_slash_frame = -480
let level_choise = 0

let levels = [	["...................",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.....s..s...s....=",
				"==================="],
			   ["...................",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.................=",
				"=.................=",
				"=........f........=",
				"=.................=",
				"=.................=",
				"=.................=",
				"==================="]
]

function setup(){
	new Canvas(750, 375);
	world.gravity.y = 11;
	player = new Group()
	block = new Group()
	floor = new block.Group()
	button = new Group()
	gg = new Sprite()
	enemy = new Group()
	enemy_s = new enemy.Group()
	level_button = new Group()
	
}

function setting_up() {
	allSprites.remove()
	world.gravity.y = 11;
	health = 25
	enemy_hp = []
	last_eb_frame = []

	

	playerb = new player.Sprite()
	playerb.w = 25
	playerb.h =20
	playerb.color = "red"
	playerb.rotationLock=true
	playerb.drag = 0;
	playerb.bounciness = 0
	playerb.mass = 2
	playerb.x = 100
	playerb.y = 100

	playerl = new player.Sprite(playerb.x,playerb.y+10.5)
	playerl.w = 25
	playerl.h = 5
	playerl.color = "red"
	playerl.rotationLock=true
	playerl.drag = 0
	playerl.bounciness = 0
	playerl.mass = 1


	floor.w = 50
	floor.h = 50 
	floor.tile= "="
	floor.collider = "static"
	floor.drag = 0 ;
	floor.color = "blue"
	floor.bounciness = 0.1;


	pbullet = new player.Group()
	pbullet.diameter=10
	pbullet.color = "red"
	pbullet.collider = "none"
	pbullet.speed = 7

	slash = new player.Group()
	slash.w = 5
	slash.h = 40
	slash.collider = "n"
	slash.offset.y = 30 
	slash.color = "red"

	health_point = new player.Group()
	health_point.w = 15
	health_point.h = 2
	health_point.collider= "n"
	health_point.color = "yellow"

	enemy.color ="purple"

	enemy_s.w = 25
	enemy_s.h = 25
	enemy_s.rotationLock =true
	enemy_s.tile = "s"

	enemy_b = new enemy.Group()
	enemy_b.diameter=10
	enemy_b.collider = "none"
	enemy_b.speed = 5
	
	enemy_f.w = 25
	enemy_f.h = 25
	enemy_f.rotat = 45
	enemy_f.rotationLock =true
	enemy_f.tile = "f"
	
	let player_g = new GlueJoint(playerb, playerl);

	new Tiles(levels[level_choise],
		50,
		50,
		floor.w,
		floor.h,
	)

	settedup = true
}

function draw() {
	frameRate(60)
	clear();
	background(0)
	if (gameover == true){
		if (restart_menu_setted == false){
			restart_menu_setup()
			restart_menu_setted = true
			menu_setted = false
		}
		else{
			restart_menu()
		}
	}
	else{
		if (game_start == false){
			if (menu_setted==false){
				menu_setup()
				menu_setted = true
			}
			else{
				menu()
			}
		}
		else{
		
			if (settedup == false){
				setting_up()
				restart_menu_setted = false
			}
			else{
				game()
			}
		}
	}
}


function game() {
	camera.x = playerb.x;
	camera.y = playerb.y;
	if (kb.pressing("a"))
	{
		right = false
		if (playerl.vel.x > -3){
			playerb.vel.x = -4.5 ;
		}
		if (kb.presses("o")&&playerl.colliding(floor)){
			playerb.vel.x = -8
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
			playerb.vel.x = 8
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
		if ((frameCount-last_slash_frame)>30){
			let slashing = new slash.Sprite()
			slashing.offset.y = 30 
			slashing.y = playerb.y
			last_slash_frame = frameCount
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

	if ((playerl.collides(enemy)||playerb.collides(enemy)||enemy_b.overlaps(playerb)||enemy_b.overlaps(playerl))&&(frameCount - last_hit_frame)>90){
		health -= 1
		last_hit_frame = frameCount
		if (playerb.x>enemy.x){
			if (frameCount-last_hit_frame<30){
				playerb.vel.x = 5
			}
		}
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
		allSprites.remove()

		gg = new Sprite
		gg.w = 1
		gg.h = 1
		gg.collider = "n"
		gg.color = "black"
		gg.textSize = 100
		gg.x = camera.x
		gg.y = camera.y
		gg.text = "GAME OVER"
		gg.textColor = "red"

		gameover = true
	}

if (enemy_hp.length<enemy_s.length){
	enemy_hp.push (5)
	last_eb_frame.push (-100)
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
		last_eb_frame.splice(enemy_s_num,1)
		enemy_s[enemy_s_num].remove()

	}
	if (enemy_s.length>0){
		if ((playerb.x-enemy_s[enemy_s_num].x)>100||(playerb.x-enemy_s[enemy_s_num].x)<-100){
			enemy_s[enemy_s_num].vel.x = 2*Math.cos((frameCount-60*enemy_s_num)*0.05)
		}
		else{
			
			
			if ((frameCount-last_eb_frame[enemy_s_num])>60){
			let eb = new enemy_b.Sprite()
			if ((playerb.x-enemy_s[enemy_s_num].x)<400&&(playerb.x-enemy_s[enemy_s_num].x)>0){
				eb.direction = 0
				eb.x = enemy_s[enemy_s_num].x + 10
				eb.y = enemy_s[enemy_s_num].y
			}else{
				eb.direction = 180
				eb.x = enemy_s[enemy_s_num].x - 10
				eb.y = enemy_s[enemy_s_num].y
			}
		}
			for (let ebn = 0 ; ebn < enemy_b.length ; ebn++) {
				if (enemy_b[ebn].overlaps(floor)||enemy_b[ebn].overlaps(playerb)||(enemy_b[ebn].x-camera.x)>400||(enemy_b[ebn].x-camera.x)<-400||enemy_b[ebn].overlaps(slash)){
					enemy_b[ebn].remove()
					ebn -= 1
				}
				if (ebn>0){
					if (((enemy_b[ebn-1].x-enemy_b[ebn].x)<50&&(enemy_b[ebn-1].x-enemy_b[ebn].x)>0)||((enemy_b[ebn-1].x-enemy_b[ebn].x)>-50)&&(enemy_b[ebn-1].x-enemy_b[ebn].x)<0){
						enemy_b[ebn].remove()
						ebn -= 1
				}}
				if (ebn>3){
					enemy_b[ebn].remove()
					ebn -= 1
					last_eb_frame[enemy_s_num] = frameCount
				}
			}
	}
	
}
}}

function restart_menu_setup(){
	world.gravity.y = 0;


	restart = new button.Sprite()
	restart.w = 150
	restart.h = 75
	restart.x = camera.x
	restart.y = camera.y+100
	restart.color = "green"
	restart.textSize = 30
	restart.text = "back to \nmenu"
}

function restart_menu() {
	if (restart.mouse.released()) {
		gg.remove()
		restart.remove()
		button = new Group()
		gameover = false
		game_start = false
	}
}

function menu_setup(){
	allSprites.remove()
	world.gravity.y = 0;


	start = new button.Sprite()
	start.w = 150
	start.h = 75
	start.x = camera.x
	start.y = camera.y+100
	start.color = "green"
	start.textSize = 30
	start.text = "start"

}

function menu(){
	if (start.mouse.released()) {
		start.remove()
		level_button.w = 75
		level_button.h = 75
		level_button.amount = 6
		for (let level_num = 0 ; level_num<level_button.length;level_num+=1){
			level_button[level_num].text = level_num+1
			if (level_num<3){
				level_button[level_num].y = camera.y - 50
				level_button[level_num].x = camera.x + 80*(level_num-1)
			}
			else if (level_num<6){
				level_button[level_num].y = camera.y + 50
				level_button[level_num].x = camera.x + 80*(level_num-4)
			}
		}
		choose_level = true
		if (choose_level == true){
			if (level_button[level_num].mouse.released()){
				gameover = false 
				game_start = true 
				settedup = false
				choose_level = false
				level_choise = level_num
			}

		}
	}

}