class Circle {

  constructor(gameSize) {

    this.gameSize = gameSize

    this.circleSize = {
      w: 30,
      h: 30
    }

    this.circlePos = {
      left: this.gameSize.w / 2,    // Sale de la mitad del ancho :D
      top: this.gameSize.h          // Sale desde abajo :D
    }

    this.ballPhysics = {
      speed: {
        left: 9,
        top: -5
      }
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
    this.circlePos.left += this.ballPhysics.speed.left
    this.circlePos.top += this.ballPhysics.speed.top

    this.updateposition()
  }

  updateposition() {
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
  }
}