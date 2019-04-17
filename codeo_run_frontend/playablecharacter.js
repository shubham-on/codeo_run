class PlayableCharacter extends AnimatedObject{

    constructor(name, x=100, y=220, points=0, health=100, life_time_points=0, pcPositions = []){

        super(`./assets/mainChar/mainCharSheet.png`)

        this.name = name
        this.x = x
        this.y = y
        this.points = points
        this.health = health
        this.life_time_points = life_time_points
        this.vertical_speed = -20
        Counter.changeScore(this.points)
        Counter.changeHealth(this.health)
        
        this.pcPositions = pcPositions;

        this.scaleFactor = 4
        this.direction = 'stop'


        this.spritesheet = {


          width: 32,
          height: 32,

          idle: {

            direction: 'stop',
            frames: 12,
            yPos: 0

          },

          runLeft: {

            direction: 'left',
            frames: 7,
            yPos: 9

          },

          runRight: {

            direction: 'right',
            frames: 7,
            yPos: 1

          }

        }
    }

    verticalMovement(){
        this.y -= this.vertical_speed

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.direction == 'stop'){
          this.drawFrame(0, 0, this.x, this.y);
          this.pcPositions = [parseInt(this.x), parseInt(this.y)];

        } else if(this.direction == 'right' ){
          this.x += 7
          this.drawFrame(0, 0, this.x, this.y);
          this.pcPositions = [parseInt(this.x), parseInt(this.y)];

        } else if(this.direction == 'left'){
          this.x -= 7
          this.drawFrame(0, 8, this.x, this.y);
          this.pcPositions = [parseInt(this.x), parseInt(this.y)];

        }
    }

    idle() {
      this.animateObject(this.spritesheet.idle, 15)
      this.pcPositions = [parseInt(this.x), parseInt(this.y)];

    }

    runLeft() {
      this.animateObject(this.spritesheet.runLeft, 5, () => {this.x -= 30})
      this.pcPositions = [parseInt(this.x), parseInt(this.y)];

    }

    runRight() {
      this.animateObject(this.spritesheet.runRight, 5, () => {this.x += 30})
      this.pcPositions = [parseInt(this.x), parseInt(this.y)];

    }
}
