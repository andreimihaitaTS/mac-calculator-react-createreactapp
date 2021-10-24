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
const buttons = [
    'AC',
    '+/-',
    '%',
    '0/0',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
]
function generateButtons() {
    return buttons.map((button, index) => {
        return <div className={`div${index + 1}`}>{button}</div>
    })
}

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
                    {/* <Textfit mode="single"> */}
                    21321
                    {/* </Textfit> */}
                </div>
                <div className="calculator__buttons">{generateButtons()}</div>
            </section>
        </>
    )
}

export default Calculator
