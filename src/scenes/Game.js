import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene
{

    speed = 4

    preload()
    {
        this.load.image('car', 'assets/Audi.png')
        this.load.image('bg', 'assets/Straight_Road.png')
        this.load.image('bg2', 'assets/Straight_Road.png')
        this.load.audio('carSpeedAudio', 'assets/car+speed+01.wav')
    }

    create()
    {
        this.background = this.add.image(0, 0, 'bg').setScale(0.685)
        this.background.setOrigin(0, 0)
        console.log(this.background.height)

        this.background2 = this.add.image(0, -699, 'bg2').setScale(0.685)
        this.background2.setOrigin(0, 0)

        this.car = this.physics.add.sprite(165, 650, 'car')
        this.car.setScale(0.5)

        // set bounds 
        this.physics.world.setBounds(this.scale.width/6.4, 0, this.scale.width/1.43, this.scale.height);

        // so the car does'nt go out of road while stering
        this.car.setCollideWorldBounds()

        // so the car does not fall in y axis
        this.physics.world.gravity.y = 0

        var music = this.sound.add('carSpeedAudio')
        music.setLoop(true)
        // music.play()

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update()
    {
        
        if(this.car.y > 450)
        {
            this.car.y -= 2
        }
        else
        {
            this.background.y += this.speed
            this.background2.y += this.speed
            
            const scrollY = this.cameras.main.scrollY
            
            if(this.background.y >= 640)
            {
                this.background.y = this.background2.y - 699
            }
            if(this.background2.y >= 640)
            {
                this.background2.y = this.background.y - 699
            }
        }

        // left and right movement using pointer for mobile
        if(this.input.pointer1.isDown)
        {
            if(this.input.pointer1.x < this.scale.width/2)
            {
                this.car.x -= 2
            }
            else
            {
                this.car.x += 2
            }
        }
        // movement using keyboard keys
        else if(this.cursors.left.isDown)
        {
            this.car.x -= 2
        }
        else if(this.cursors.right.isDown)
        {
            this.car.x += 2
        }

        // if(this.cursors.up.isDown)
        // {
        //     this.speed += 2
        //     console.log(this.speed)
        // }
        
    }
}