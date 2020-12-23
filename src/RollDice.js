import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = { die1: 'one', die2: 'one', rolling: false }
        this.roll = this.roll.bind(this)
    }


    roll(e) {
        let rand1 = Math.floor(Math.random() * 6)
        let rand2 = Math.floor(Math.random() * 6)
        let face1 = this.props.sides[rand1]
        let face2 = this.props.sides[rand2]
        this.setState({ die1: face1, die2: face2, rolling: true })

        // Wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000)
    }

    render() {
        return (
            <div>
                <div className="Dice-Container">
                    <Dice face={this.state.die1} shake={this.state.rolling} />
                    <Dice face={this.state.die2} shake={this.state.rolling} />
                </div>

                <button onClick={this.roll} disabled={this.state.rolling} className="Dice-Btn">
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div >

        )
    }
}

export default RollDice