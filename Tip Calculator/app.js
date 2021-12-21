'use strict';

const form = document.getElementById('form')
let billInput = document.getElementById('bill-amount-input')
let peopleAmount = document.getElementById('people-amount-input')
let tipPercentage = document.getElementById('tip-percent')
let amountPerPerson = document.querySelector('.amount-per-person')

function calculateBillPerPerson(amount, people, tip){
    if(amount > 0 && people > 0 && tip > 0) {
        let tipAmount = amount * tip
        let tipPerPerson = tipAmount / people 
        let total = amount / people
        let totalPerPerson = total + tipPerPerson
        amountPerPerson.innerHTML = totalPerPerson.toFixed(2)
        billInput.value = ''
        peopleAmount.value = ''
        tipPercentage.value = ''
    } else {
        alert('Enter Valid Numbers')
    }
    
}


form.addEventListener('submit', function(e){
    e.preventDefault()
    calculateBillPerPerson(billInput.value, peopleAmount.value, tipPercentage.value)
    console.log(tipPercentage.value)
})

