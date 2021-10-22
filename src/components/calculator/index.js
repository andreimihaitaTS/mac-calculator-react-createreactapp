import './style.scss'
import WindowControls from '../windowControls'
import NumberInputArea from '../numberInputArea'
import ButtonGridArea from '../buttonGridArea'

function Calculator() {
    return (
        <section>
            <WindowControls />
            <NumberInputArea />
            <ButtonGridArea />
        </section>
    )
}

export default Calculator
