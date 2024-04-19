class Circle {

  constructor(gameSize) {

    this.gameSize = gameSize

    this.circleSize = {
      w: 30,
      h: 30
    }

    this.circlePos = {
      left: 0,
      top: 300
    }

    this.circlePhysics = {
      speed: {
        left: 15,
        top: 6
      },
      gravity: .9
    }

    this.init()
  }

  init() {

    this.circleElement = document.createElement('div')

    this.circleElement.style.position = "absolute"
    this.circleElement.style.width = `${this.circleSize.w}px`
    this.circleElement.style.height = `${this.circleSize.h}px`
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
    this.circleElement.style.backgroundColor = `red`
    this.circleElement.style.borderRadius = '50%'

    document.querySelector('#game-screen').appendChild(this.circleElement)
  }

  move() {
    this.circlePos.left += this.circlePhysics.speed.left
    this.circlePos.top += this.circlePhysics.speed.top

    this.circlePhysics.speed.top += this.circlePhysics.gravity      // gravity D:

    this.checkBordersCollision()
    this.updatePosition()
  }

  checkBordersCollision() {

    if (this.circlePos.top >= this.gameSize.h - this.circleSize.h) {
      this.turnTop()
    }
  }

  turnTop() {
    this.circlePhysics.speed.top *= -1
  }

  updatePosition() {
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
  }

}