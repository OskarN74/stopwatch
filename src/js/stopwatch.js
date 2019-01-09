// Stopwatch version 1.0.0
// Author: Oskar Nijs

export class StopWatch {
  constructor () {
    let start
    let seconds = 0
    let current = 0
    this.duration = 0

    this.start = function () {
      start = new Date().getTime()
    }

    this.stop = function () {
      // count total seconds
      seconds += (new Date().getTime() - start) / 1000
      // set duration as a number
      this.duration = +seconds
    }

    this.reset = function () {
      // reset all values to original state
      start = null
      seconds = 0
      this.duration = 0
    }

    this.getDuration = function () {
      return +this.duration
    }

    this.getDurationWhileRunning = function () {
      // time gone by since start was clicked
      current = (new Date().getTime() - start) / 1000
      // calculate overall time passed
      let alltime = current + this.duration
      // return alltime as a number
      return +alltime
    }
  }
}
