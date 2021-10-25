import './style.scss'
import WindowControls from '../windowControls'
import NumberInputArea from '../numberInputArea'
import ButtonGridArea from '../buttonGridArea'
import CalculatorPhoto from '../../images/mac.png'
import { Textfit } from 'react-textfit'
import { useEffect, useState } from 'react'
// function Calculator() {
//     return (
//         <section className="calculator">
//             <WindowControls className="calculator__windowControls" />
//             <NumberInputArea />
//             <ButtonGridArea />
//         </section>
//     )
// }

const buttons = [
  { value: 'AC', id: 1 },
  { value: '+/-', id: 2 },
  { value: '%', id: 3 },
  { value: '/', id: 4 },
  { value: 7, id: 5 },
  { value: 8, id: 6 },
  { value: 9, id: 7 },
  { value: 'x', id: 8 },
  { value: 4, id: 9 },
  { value: 5, id: 10 },
  { value: 6, id: 11 },
  { value: '-', id: 12 },
  { value: 1, id: 13 },
  { value: 2, id: 14 },
  { value: 3, id: 15 },
  { value: '+', id: 16 },
  { value: '0', id: 17 },
  { value: '.', id: 18 },
  { value: '=', id: 19 },
]

const Calculator = () => {
  function generateButtons() {
    return buttons.map((button) => {
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

  if (totalValue || newInputValue) buttons[0].value = 'C'
  else buttons[0].value = 'AC'

  return (
    <>
      <img src={CalculatorPhoto} alt="poza" />
      <section className="calculator">
        <div className="calculator__titleBar">
          <div className="titleBar__buttons">
            <div className="close"></div>
            <div className="minimize"></div>
            <div className="maximize"></div>
          </div>
        </div>
        <div className="calculator__inputField">
          {/* <Textfit mode="single"> */}
          {newInputValue ? newInputValue : totalValue}
          {/* </Textfit> */}
        </div>
        <div className="calculator__buttons">{generateButtons()}</div>
      </section>
    </>
  )
}

export default Calculator
