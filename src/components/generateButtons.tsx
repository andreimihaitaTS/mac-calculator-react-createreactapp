import { FunctionComponent } from "react";

import { BUTTONS } from "../../utils/Constants";
import { ButtonTypes } from "../types";

const Buttons: FunctionComponent<{ buttonProps: ButtonTypes }> = ({
  buttonProps,
}) => {
  const {
    totalValue,
    setTotalValue,
    currentOperator,
    setCurrentOperator,
    newInputValue,
    setNewInputValue,
  } = buttonProps;

  function addition(a: number, b = 0) {
    return a + b;
  }
  function multiplication(a: number, b = 1) {
    return a * b;
  }
  function divide(a: number, b = 1) {
    return a / b;
  }
  function substraction(a: number, b = 0) {
    return a - b;
  }
  function equal() {
    switch (currentOperator) {
      case "+":
        setTotalValue(addition(totalValue, newInputValue));
        break;
      case "x":
        setTotalValue(multiplication(totalValue, newInputValue));
        break;
      case "-":
        setTotalValue(substraction(totalValue, newInputValue));
        break;
      case "/":
        setTotalValue(divide(totalValue, newInputValue));
        break;
      default:
        break;
    }
    if (currentOperator) {
      setNewInputValue(0);
      setCurrentOperator("");
    }
  }

  function handleDigit(digit: number) {
    if (currentOperator) {
      setNewInputValue(newInputValue * 10 + digit);
    } else {
      setTotalValue(totalValue * 10 + digit);
    }
  }
  const handleSymbol = (symbol: string) => {
    setCurrentOperator(symbol);
    switch (symbol) {
      case "C":
        setTotalValue(0);
        setNewInputValue(0);
        setCurrentOperator("");
        break;
      case "=":
        equal();
        break;
      default:
        setCurrentOperator(symbol);
    }
  };

  function handleClick(value: string | number) {
    if (typeof value == "string") handleSymbol(value);
    else {
      handleDigit(value);
    }
  }

  if (totalValue || newInputValue) BUTTONS[0].value = "C";
  else BUTTONS[0].value = "AC";

  function generateButtons() {
    return BUTTONS.map((button) => {
      return (
        <div
          role="button"
          tabIndex={0}
          key={button.value}
          className={`div${button.id}`}
          onClick={() => handleClick(button.value)}
          onKeyDown={() => handleClick(button.value)}
        >
          {button.value}
        </div>
      );
    });
  }

  return <div className="calculator__buttons">{generateButtons()}</div>;
};

export default Buttons;
