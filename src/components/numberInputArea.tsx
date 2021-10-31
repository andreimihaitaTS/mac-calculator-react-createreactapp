import { FunctionComponent } from 'react'

const NumberInputArea:FunctionComponent<{newInputValue:number, totalValue:number}> = ({ newInputValue, totalValue }) => {
    return (
      <div className="calculator__inputField">
        {newInputValue ? newInputValue : totalValue}
      </div>
    )
  }
  
  export default NumberInputArea
  