class Pokemon {
    constructor (name) {
      this.name = name
    }

    sayHello()
    {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    sayMessage()
    {
        console.log(`Mi pokemon ${this.name} dice: Heey!`)
    }
  
    log (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }

  module.exports = Pokemon