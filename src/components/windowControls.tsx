import { FunctionComponent } from 'react'

const WindowControls:FunctionComponent = () => {
    return (
      <div className="calculator__titleBar">
        <div className="titleBar__buttons">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="maximize"></div>
        </div>
      </div>
    )
  }
  
  export default WindowControls
  