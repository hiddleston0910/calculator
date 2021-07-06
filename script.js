const readout = document.querySelector('.readout')
const clearBtn = document.querySelector('.clear-btn')
const numBtns = document.querySelectorAll('.num-btn')
const operBtns = document.querySelectorAll('.oper-btn')

let showAnswer = false
let calculationValue = ''

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', show, false)
}

for (let i = 0; i < operBtns.length; i++) {
  operBtns[i].addEventListener('click', append, false)
}

function show(e) {
  if (readout.value.toString() === '0' || showAnswer) {
    readout.value = ''
    calculationValue = ''
    showAnswer = false
  }

  totalStr(e.target.dataset.num)

  readout.value += e.target.dataset.num
}

function append(e) {

  const symbol = e.target.textContent.trim()

  totalStr(e.target.dataset.ope)

  readout.value += ` ${symbol} `
}

function totalStr(str) {
  calculationValue += str
}

function equal() {
  if (!isNaN(calculationValue.slice(0, -1))) {
    return
  }

  readout.value = eval(calculationValue)
  showAnswer = true
}

function reset() {
  readout.value = 0
  calculationValue = ''
  showAnswer = false
}

function getPercentage() {
  if (isNaN(calculationValue)) {
    return
  }
  readout.value = parseFloat(calculationValue) * 0.01
}
