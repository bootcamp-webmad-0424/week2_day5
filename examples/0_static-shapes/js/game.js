const Game = {

  gamseScreen: document.querySelector('#game-screen'),

  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  init() {
    this.setGameSize()
    this.createElements()
  },

  setGameSize() {
    this.gamseScreen.style.width = `${this.gameSize.w}px`
    this.gamseScreen.style.height = `${this.gameSize.h}px`
  },

  createElements() {
    new Square(this.gameSize)
    new Image(this.gameSize)
    new Circle(this.gameSize)
  }

}
