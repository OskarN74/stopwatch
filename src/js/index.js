// Stopwatch version 1.0.0
// Author: Oskar Nijs

import { StopWatch } from './stopwatch'
import '../css/style.css'

// Main app
const App = (function () {
  // Create new stopwatch object
  const stopwatch = new StopWatch()
  // initialize interval
  let interval
  // selectors
  const btnStart = document.querySelector('#start')
  const btnStop = document.querySelector('#stop')
  const btnReset = document.querySelector('#reset')

  // EventListeners
  const LoadEventListeners = function () {
    btnStart.addEventListener('click', startTimer)
    btnStop.addEventListener('click', stopTimer)
    btnReset.addEventListener('click', resetTimer)
  }

  // Functions
  const startTimer = () => {
    btnStart.setAttribute('disabled', 'disabled')
    btnStop.removeAttribute('disabled')
    stopwatch.start()
    interval = setInterval(displayCurrentDuration, 10)
  }

  const stopTimer = () => {
    btnStop.setAttribute('disabled', 'disabled')
    btnStart.removeAttribute('disabled')
    stopwatch.stop()
    clearInterval(interval)
    let time = stopwatch.getDuration()
    time = time.toFixed(2)
    document.querySelector('#time').textContent = time
  }

  const resetTimer = () => {
    btnStop.setAttribute('disabled', 'disabled')
    btnStart.removeAttribute('disabled')
    stopwatch.reset()
    clearInterval(interval)
    let time = stopwatch.getDuration()
    time = time.toFixed(2)
    document.querySelector('#time').textContent = time
  }

  const displayCurrentDuration = () => {
    let time = stopwatch.getDurationWhileRunning()
    time = time.toFixed(2)
    document.querySelector('#time').textContent = time
  }

  return {
    init () {
      LoadEventListeners()
    }
  }
})()

App.init()
