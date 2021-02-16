import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene
{
    preload()
    {
        this.load.image('car', 'assets/Audi.png')
        this.load.image('bg', 'assets/straightRoad.png')
        this.load.image('bg2', 'assets/straightRoad.png')
        this.load.audio('carSpeedAudio', 'assets/car+speed+01.wav')
    }

    create()
    {
        this.background = this.add.image(0, 0, 'bg').setScale(0.685)
        this.background.setOrigin(0, 0)
        console.log(this.background.height)
        this.background2 = this.add.image(0, -699, 'bg2').setScale(0.685)
        this.background2.setOrigin(0, 0)
        this.car = this.add.image(165, 650, 'car')
        this.car.setScale(0.5)
        var music = this.sound.add('carSpeedAudio')
        music.setLoop(true)
        // music.play()


    }

    update()
    {

        if(this.car.y > 450)
        {
            this.car.y -= 2
        }
        else
        {
            this.background.y += 2
            this.background2.y += 2
            
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

        
        
    }
}