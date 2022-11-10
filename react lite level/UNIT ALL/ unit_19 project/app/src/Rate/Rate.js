import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currensyRate': {},
        }
        this.currensy = ['USD', 'RUB', 'BRL', 'PHP'];
        this.getRate();
    }

    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=5eaa41c378f4a96e872d4a00bf899b59')
            .then(data => {
                return data.json()
            })
            .then(data => {
                this.setState({ date: data.date });
                let result = {};
                for (let i = 0; i < this.currensy.length; i++) {
                    result[this.currensy[i]] = data.rates[this.currensy[i]];
                }

                this.setState({ currensyRate: result });
            })
    }

    render() {
        return (
            <div className='rate'>
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currensyRate).map(keyName =>
                        (<div className="block flex-item" key={keyName}>
                            <div className="currency-name">{keyName}</div>
                            <div className="currency-in">{this.state.currensyRate[keyName].toFixed(2)}*</div>
                            <p>* Можно купить за 1 EUR</p>
                        </div>)
                    )}
                </div>
                <Calc rate={this.state.currensyRate} />
            </div>
        );
    }
}

export default Rate;