"use strict"
let billInput = document.getElementById("bill-input")
let numPeople = document.getElementById("people-input")
let tipEl = document.getElementById("tip-amount")
let totalEl = document.getElementById("total-amount")
let tipButtons = document.querySelectorAll(".tip-btn")
let customTip = document.getElementById("custom-tip")
let alertEl = document.getElementById("alert-bill")
let resetBtn = document.getElementById("reset-btn")

function calcBill(tipValue) {
  if (billInput.value === "") {
    alertEl.style.display = "block"
    billInput.style.outlineColor = "red"
    return
  }

  if (numPeople.value === "" || numPeople <= 0) {
    numPeople.value = 1
  }

  let billAmount = Number.parseInt(billInput.value)
  let people = Number.parseInt(numPeople.value)
  let tipAmount = (billAmount * (tipValue / 100)) / people
  let totalBill = tipAmount + billAmount / people

  tipEl.innerHTML = `$${tipAmount.toFixed(2)}`
  totalEl.innerHTML = `$${totalBill.toFixed(2)}`
}

tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tip = Number.parseInt(e.target.innerText)
    calcBill(tip)
  })
})

customTip.addEventListener("blur", (e) => {
  let tip = e.target.value
  calcBill(tip)
})

resetBtn.addEventListener("click", reset)

function reset() {
  // console.log("clicked reset!")
  billInput.value = ""
  numPeople.value = ""
  tipEl.innerHTML = "$0.00"
  totalEl.innerHTML = "$0.00"
  alertEl.style.display = "none"
  customTip.innerText = "Custom"
  billInput.style.outlineColor = "hsl(172, 67%, 45%)"
}
