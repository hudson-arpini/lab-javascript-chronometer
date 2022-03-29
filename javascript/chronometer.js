class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start() {
    let intervalId = setInterval(()=>{this.currentTime++},1000)
    this.intervalId = intervalId
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes
  }

  getSeconds() {
    let minutes = Math.floor(this.currentTime/60)
    if (minutes<1){return this.currentTime}
    else{
      let seconds = this.currentTime % (minutes*60)
      return seconds}
  }

  computeTwoDigitNumber(value) {
    if(value<10){return '0'+value.toString()}
    else {return value.toString()}
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    let minString = this.computeTwoDigitNumber(this.getMinutes())
    let secString = this.computeTwoDigitNumber(this.getSeconds())
    return `${minString}:${secString}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
