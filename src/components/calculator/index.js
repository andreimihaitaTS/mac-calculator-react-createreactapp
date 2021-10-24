import './style.scss'
import WindowControls from '../windowControls'
import NumberInputArea from '../numberInputArea'
import ButtonGridArea from '../buttonGridArea'
import CalculatorPhoto from '../../images/mac.png'
import { Textfit } from 'react-textfit'
// function Calculator() {
//     return (
//         <section className="calculator">
//             <WindowControls className="calculator__windowControls" />
//             <NumberInputArea />
//             <ButtonGridArea />
//         </section>
//     )
// }

function Calculator() {
    return (
        <>
            <img src={CalculatorPhoto} alt="poza" />
            <section className="calculator">
                <div className="calculator__titleBar">
                    <div class="titleBar__buttons">
                        <div class="close"></div>
                        <div class="minimize"></div>
                        <div class="maximize"></div>
                    </div>
                </div>
                <div className="calculator__inputField">
                    <span>
                        <Textfit mode="single">03213123213213213</Textfit>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Calculator
