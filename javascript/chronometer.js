class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(()=>this.currentTime += 1,1000)
    
    // if (callback !== ""){
    //   return this.intervalId = setInterval((callback)=>this.currentTime += 1,1000)
    // } else return this.intervalId = setInterval(()=>this.currentTime += 1,1000)
    
  //to revise
  
  }; 

  getMinutes() {
    return parseInt(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {

    if (value.toString().length ===1){
      return value = "0" + value
    } else return value
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
