const NumberInputArea = ({ newInputValue, totalValue }) => {
  return (
    <div className="calculator__inputField">
      {newInputValue ? newInputValue : totalValue}
    </div>
  )
}

export default NumberInputArea
