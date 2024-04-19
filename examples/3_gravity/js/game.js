const Game = {

  gameScreen: document.querySelector("#game-screen"),

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  circle: undefined,

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  start() {
    this.createElements()
    this.startGameLoop()
  },

  createElements() {
    this.circle = new Circle(this.gameSize)
  },

  startGameLoop() {
    setInterval(() => {
      this.moveAll()
    }, 30)
  },

  moveAll() {
    this.circle.move()
  }

}
