import React  from "react";

const Games=({usePhaserGame})=>{
    const Phaser=window.Phaser;

    var player;
    let stars;
    let bombs;
    let platforms;
    let cursors;
    let gameOver = false;
    let score = 0;
    let scoreText;

    class Example extends Phaser.Scene
    {
        preload ()
        {

            this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
            this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
            this.load.image('red', 'https://labs.phaser.io/assets/particles/red.png');
            this.load.image('ground', '/assets/platform.png');
            this.load.image('star', '/assets/star.png');
            this.load.image('bomb', '/assets/bomb.png');
            this.load.spritesheet('dude',
                '/assets/dude.png',
                { frameWidth: 32, frameHeight: 48 }
            );
        }

        create ()
        {
            this.add.image(400, 300, 'sky');

            const particles = this.add.particles(0, 0, 'red', {
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });
            platforms = this.physics.add.staticGroup();

            platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        
            platforms.create(600, 400, 'ground');
            platforms.create(50, 250, 'ground');
            platforms.create(750, 220, 'ground');

            const logo = this.physics.add.image(400, 100, 'logo');

            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);

            particles.startFollow(logo);
            
            player = this.physics.add.sprite(100, 450, 'dude');

            player.setBounce(0.2);
            player.setCollideWorldBounds(true);

            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });

            this.anims.create({
                key: 'turn',
                frames: [ { key: 'dude', frame: 4 } ],
                frameRate: 20
            });

            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });
            this.physics.add.collider(player, platforms);

            cursors = this.input.keyboard.createCursorKeys();


                stars = this.physics.add.group({
                    key: 'star',
                    repeat: 11,
                    setXY: { x: 12, y: 0, stepX: 70 }
                });
                
                stars.children.iterate(function (child) {
                
                    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
                
                });

                this.physics.add.collider(stars, platforms);
                this.physics.add.overlap(player, stars, collectStar, null, this);

                scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

                bombs = this.physics.add.group();

                this.physics.add.collider(bombs, platforms);

                this.physics.add.collider(player, bombs, hitBomb, null, this);

                function collectStar (player, star){
                    star.disableBody(true, true);
                    score += 10;
                    scoreText.setText('Score: ' + score);
            
                    if (stars.countActive(true) === 0)
                        {
                            stars.children.iterate(function (child) {
                    
                                child.enableBody(true, child.x, 0, true, true);
                    
                            });
                    
                            let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
                    
                            let bomb = bombs.create(x, 16, 'bomb');
                            bomb.setBounce(1);
                            bomb.setCollideWorldBounds(true);
                            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
                    
                        }
                }
            
                function hitBomb (player, bomb){
                    this.physics.pause();
            
                    player.setTint(0xff0000);
            
                    player.anims.play('turn');
            
                    gameOver = true;
                }
        }
        update (){
            if(gameOver){
                return;
            }
            if (cursors.left.isDown)
                {
                    player.setVelocityX(-160);
                
                    player.anims.play('left', true);
                }
                else if (cursors.right.isDown)
                {
                    player.setVelocityX(160);
                
                    player.anims.play('right', true);
                }
                else
                {
                    player.setVelocityX(0);
                
                    player.anims.play('turn');
                }
                
                if (cursors.up.isDown && player.body.touching.down)
                {
                    player.setVelocityY(-330);
                }
        }
    }

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: Example,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };
    
    const game=usePhaserGame(config);
}

export default Games;