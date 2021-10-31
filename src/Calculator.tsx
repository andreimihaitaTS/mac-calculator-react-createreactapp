import { useState, FunctionComponent } from "react";
import NumberInputArea from "./components/numberInputArea";
import WindowControls from "./components/windowControls";
import MacPhoto from "./components/macPhoto";
import Buttons from "./components/generateButtons";

const Calculator: FunctionComponent = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [currentOperator, setCurrentOperator] = useState("");
  const [newInputValue, setNewInputValue] = useState(0);

  const buttonProps = {
    totalValue: totalValue,
    setTotalValue: setTotalValue,
    currentOperator: currentOperator,
    setCurrentOperator: setCurrentOperator,
    newInputValue: newInputValue,
    setNewInputValue: setNewInputValue,
  };

  return (
    <section className="calculator">
      <WindowControls />
      <NumberInputArea newInputValue={newInputValue} totalValue={totalValue} />
      <Buttons buttonProps={buttonProps} />
    </section>
  );
};

export default Calculator;
