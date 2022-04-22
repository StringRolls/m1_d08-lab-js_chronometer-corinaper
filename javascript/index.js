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


function printTime() {
  setInterval(()=>
  minDecElement.innerText = chronometer.split()[0],1000)
  setInterval(()=>
  minUniElement.innerText = chronometer.split()[1],1000)
  setInterval(()=>
  secDecElement.innerText = chronometer.split()[3],1000)
  setInterval(()=>
  secUniElement.innerText = chronometer.split()[4],1000)
}

// function printMinutes() {
  
// }

// function printSeconds() {
//   // ... your code goes here
// }

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  newSplit = document.createElement("li")
  newSplit.innerText = chronometer.split()
  splitsElement.appendChild(newSplit)
}

// function clearSplits() {
//   while(splitsElement.firstChild){
//     splitsElement.removeChild(splitsElement.lastChild)
//   }
// }

// function setStopBtn() {
//   btnLeftElement.innerText = "STOP"
//     btnRightElement.innerText = "SPLIT"
//     chronometer.start()
//     printTime()
// }

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  btnLeftElement.classList.toggle("stop")
  btnLeftElement.classList.toggle("start")
  
  btnRightElement.classList.toggle("reset")
  btnRightElement.classList.toggle("split")

  if (btnLeftElement.classList.contains("stop")){
    btnLeftElement.innerText = "STOP"
    btnRightElement.innerText = "SPLIT"
    chronometer.start()
    printTime()
  } else if (btnLeftElement.classList.contains("start")){
    btnLeftElement.innerText = "START"
    btnRightElement.innerText = "RESET"
    
    chronometer.stop() 
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split"))
  {printSplit()}
  else if (btnRightElement.classList.contains("reset")){
    chronometer.reset()
    while(splitsElement.firstChild){
      splitsElement.removeChild(splitsElement.lastChild)
    }
  }
  
});
