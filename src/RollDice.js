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
        this.setState({ die1: face1 })
        this.setState({ die2: face2 })
    }

    render() {
        return (
            <div>
                <div className="Dice-Container">
                    <Dice face={this.state.die1} />
                    <Dice face={this.state.die2} />
                </div>

                <button onClick={this.roll} className="Dice-Btn">Roll Dice!</button>
            </div >

        )
    }
}

export default RollDice