const Game = {

  gameScreen: document.querySelector("#game-screen"),

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  circles: [],

  init() {
    this.setDimensions()
    this.setEventListeners()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  setEventListeners() {
    document.onkeydown = event => {
      if (event.code === 'Space') {
        this.shootNewBall()
      }
    }
  },

  start() {
    this.startGameLoop()
  },

  startGameLoop() {
    setInterval(() => {
      this.moveAll()
      this.clearAll()
    }, 30)
  },

  moveAll() {
    this.circles.forEach(eachCircle => {
      eachCircle.move()
    })
  },

  clearAll() {
    this.circles.forEach((eachCircle, index) => {
      if (eachCircle.circlePos.left > this.gameSize.w) {
        eachCircle.circleElement.remove()
        this.circles.splice(index, 1)
      }
    })
  },

  shootNewBall() {
    this.circles.push(new Circle(this.gameSize))
  }

}
