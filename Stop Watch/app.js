'use strict';
const timer = document.getElementById('time-display')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if(stoptime == true) {
    stoptime = false;
    timerCycle()
  }
}

function stopTimer() {
  if(stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if(stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    
    sec += 1;
    
    if (sec == 60) {
      min += 1;
      sec = 0
    }
    
    if (min == 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }
    
    if(sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    
    if(min < 10 || min == 0) {
      min = '0' + min
    }
    
    if(hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    
    timer.innerHTML = hr + ':' + min + ':' + sec;
    
    setTimeout(timerCycle, 1000)
  }
}

function resetTime() {
  timer.innerHTML = '00:00:00'
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTime)