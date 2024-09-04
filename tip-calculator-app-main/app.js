const billInput = document.getElementById('bill-input')
const numberOfPeople = document.getElementById('number-of-people')
const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')
const fivePercentTip = document.getElementById('total-amount')
const tipButtons = document.getElementsByClassName('tip-btn')

const resetButton = document.getElementById('reset-Button')
const errorSpan = document.getElementById('zero-error')

console.log(billInput.value )
Array.from(tipButtons).forEach(btn => {

    btn.addEventListener('click', () => {
        const tipPercent = parseInt(btn.innerHTML)
        console.log(tipPercent)
        btn.classList.add('active')
        numberOfPeople.addEventListener('keydown', (event) => {
            if(event.key === 'Enter') {
                console.log(numberOfPeople.value)
                validateInput()
                const billPerPerson = parseFloat(billInput.value) / parseInt(numberOfPeople.value)
                const tipPerPerson = billPerPerson * (tipPercent / 100)
                const totalPerPerson = billPerPerson + tipPerPerson
                tipAmount.innerHTML = tipPerPerson.toFixed(2)
                totalAmount.innerHTML = totalPerPerson.toFixed(2) 
                resetButton.style.opacity = '0.9'
            }
        })
    })
    
});

const resetBtn = () => {
    if(parseFloat(billInput.value) >=1 && parseInt(numberOfPeople.value)) {
        billInput.value = ''
        numberOfPeople.value = ''
        tipAmount.innerHTML = '$0.00'
        totalAmount.innerHTML = '$0.00' 
    }
    
}

resetButton.addEventListener('click', () => {
    resetBtn()
})

const validateInput = () => {
    if(parseFloat(numberOfPeople.value) <= 0){
        errorSpan.innerHTML = "Can't be Zero"
        numberOfPeople.style.border = '1px solid red'
    }
}