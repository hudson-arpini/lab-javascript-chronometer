class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start() {
    let intervalId = setInterval(()=>{
      this.currentTime++
        minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
        minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
        secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
        secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
        milDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds())[0]
        milUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMiliseconds())[1]
    },10)
    this.intervalId = intervalId
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/6000)
    return minutes
  }

  getSeconds() {
    let minutes = Math.floor(this.currentTime/6000)
    if (minutes<1){return Math.floor(this.currentTime/100)}
    else{
      let seconds = (this.currentTime/100) % (minutes*60)
      return Math.floor(seconds)}
  }

  getMiliseconds() {
    let seconds = Math.floor(this.currentTime/100)
    if (seconds<1){return this.currentTime}
    else{ return Math.floor(this.currentTime % (seconds*100))}
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
    let miliString = this.computeTwoDigitNumber(this.getMiliseconds())
    return `${minString}:${secString}:${miliString}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
