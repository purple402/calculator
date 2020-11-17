class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    appendNumber(number) {
        /* .을 계속 추가하는 것 막음 */
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = this.getDisplayNumber(this.previousOperand)
        }
    }
}

/* class 에 대한 설명 참고 https://poiemaweb.com/es6-class */

const numberButtons = document.querySelectorAll('[data-number]'),
operationButtons = document.querySelectorAll('[data-operation]'),
equalsButton = document.querySelector('[data-equals]'),
deleteButton = document.querySelector('[data-delete]'),
allClearButton = document.querySelector('[data-all-clear]'),
previousOperandTextElement = document.querySelector('[data-previous-operand]'),
currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

/* 화살표함수
참고 : https://www.a-mean-blog.com/ko/blog/%ED%86%A0%EB%A7%89%EA%B8%80/_/Javascript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-Arrow-Functions 
forEach는 배열에 있는 요소들 한번씩 실행
map은 배열의 요소를 한번씩 실행한 결과로 새로운 array로 반환 */
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

