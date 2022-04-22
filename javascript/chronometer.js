class Chronometer {
  constructor() {
    this.currentTime = 57,
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1
    callback()
  },1000)
    
    // if (callback !== ""){
    //   return this.intervalId = setInterval((callback)=>this.currentTime += 1,1000)
    // } else return this.intervalId = setInterval(()=>this.currentTime += 1,1000)
    
  //to revise
  
  }; 

  getMinutes() {
    return this.computeTwoDigitNumber( parseInt(this.currentTime/60)) 
  }

  getSeconds() {
    return this.computeTwoDigitNumber( parseInt(this.currentTime % 60))
  }

  computeTwoDigitNumber(value) {
 return ("0" + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset(callback) {
    this.currentTime = 0
    callback()
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
