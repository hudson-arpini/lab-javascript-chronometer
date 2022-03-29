const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');



function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
}

function printMilliseconds() {
  // ... your code goes here
}

function printTime() {
  printMinutes()
  printSeconds()}


//function printSplit() {
  // ... your code goes here
//}

//function clearSplits() {
  // ... your code goes here
//}

function setStartBtn() {
  chronometer.start()
  setInterval(printTime,1000)
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  let ol = document.querySelector('#splits')
  let li = document.createElement("li")
  li.innerText = `${chronometer.split()}`
  ol.appendChild(li)
}


function setResetBtn() {
  let ol = document.querySelector("#splits")
  ol.innerText = ''
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')
  if(btnLeftElement.classList.contains('start')){btnLeftElement.innerText='START'
                                                 setStartBtn()}
  if(btnLeftElement.classList.contains('stop')){btnLeftElement.innerText='STOP'
                                                setStopBtn()}

  btnRightElement.classList.toggle('reset')
  btnRightElement.classList.toggle('split')
  if(btnRightElement.classList.contains('reset')){btnRightElement.innerText='RESET'}
  if(btnRightElement.classList.contains('split')){btnRightElement.innerText='SPLIT'}

  }
)

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){setResetBtn()}
  if(btnRightElement.classList.contains('split')){setSplitBtn()}
  }
);
