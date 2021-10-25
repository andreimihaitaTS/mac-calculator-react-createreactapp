import { useState } from 'react'
import CalculatorPhoto from '../../images/mac.png'
import { BUTTONS } from '../../utils/constants'
import NumberInputArea from '../numberInputArea'
import WindowControls from '../windowControls'
import './style.scss'

const Calculator = () => {
  function generateButtons() {
    return BUTTONS.map((button) => {
      return (
        <div
          key={button.value}
          className={`div${button.id}`}
          onClick={() => handleClick(button.value)}
        >
          {button.value}
        </div>
      )
    })
  }

  function addition(a, b = 0) {
    return a + b
  }
  function multiplication(a, b = 1) {
    return a * b
  }
  function divide(a, b = 1) {
    return a / b
  }
  function substraction(a, b = 0) {
    return a - b
  }
  function equal() {
    console.log(currentOperator)
    switch (currentOperator) {
      case '+':
        setTotalValue(addition(totalValue, newInputValue))
        break
      case 'x':
        setTotalValue(multiplication(totalValue, newInputValue))
        break
      case '-':
        setTotalValue(substraction(totalValue, newInputValue))
        break
      case '/':
        setTotalValue(divide(totalValue, newInputValue))
        break
      default:
        break
    }
    if (currentOperator) {
      setNewInputValue(0)
      setCurrentOperator('')
    }
  }

  function handleDot() {
    console.log('.')
    if (
      totalValue.toString().includes('.') ||
      newInputValue.toString().includes('.')
    )
      return
    if (currentOperator) {
      setNewInputValue(newInputValue.toString() + '.')
    } else {
      setTotalValue(totalValue.toString() + '.')
    }
  }

  function handleDigit(digit) {
    console.log(digit)
    if (currentOperator) {
      setNewInputValue(newInputValue * 10 + digit)
    } else {
      setTotalValue(totalValue * 10 + digit)
    }
  }
  const handleSymbol = (symbol) => {
    setCurrentOperator(symbol)
    switch (symbol) {
      case 'C':
        setTotalValue(0)
        setNewInputValue(0)
        setCurrentOperator('')
        break
      case '=':
        equal()
        break
      case '.':
        handleDot()
        break
      default:
        setCurrentOperator(symbol)
    }
  }

  function handleClick(value) {
    if (isNaN(value)) handleSymbol(value)
    else {
      handleDigit(value)
    }
  }

  const [totalValue, setTotalValue] = useState(0)
  const [currentOperator, setCurrentOperator] = useState('')
  const [newInputValue, setNewInputValue] = useState(0)

  if (totalValue || newInputValue) BUTTONS[0].value = 'C'
  else BUTTONS[0].value = 'AC'

  return (
    <>
      <img src={CalculatorPhoto} alt="poza" />
      <section className="calculator">
        <WindowControls />
        <NumberInputArea
          newInputValue={newInputValue}
          totalValue={totalValue}
        />
        <div className="calculator__buttons">{generateButtons()}</div>
      </section>
    </>
  )
}

export default Calculator
