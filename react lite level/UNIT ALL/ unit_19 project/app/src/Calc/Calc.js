import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,

        }

    }

    static getDerivedStateFromProps(props, state) {
        return { rate: props.rate }
    }

    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let countCurrensy = elements['count-currensy'].value;
        let typeCurrensy = elements['type-currensy'].value;
        this.setState({ result: (countCurrensy / this.state.rate[typeCurrensy]) });
    }

    render() {
        return (

            <div className='calculator'>
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>Я хочу</div>

                    <div>
                        <form onSubmit={this.calcRate}>
                            <input type="number" defaultValue="150" name='count-currensy' />
                            <select name="type-currensy" id="">
                                {Object.keys(this.props.rate).map(keyName =>
                                    (
                                        <option key={keyName} value={keyName}>{keyName}</option>
                                    )
                                )}
                            </select>
                            <input type="submit" defaultValue="calc" />
                        </form>
                    </div>
                    <div>
                        <h4>Результат</h4>
                        <ul className="calc-res">
                            <li>EUR {this.state.result}</li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default Calc;