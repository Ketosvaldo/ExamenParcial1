import React, { Component } from 'react';
import './Game.css'
class Game extends Component {
    constructor(){
        super()
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(100)
        }
    }

    handleOnChange = e => {
        const {target: {value}} = e;
        console.log(value);
        if(value.trim() > 0){
            this.setState({
                number: value,
            });
        }
        this.setState({
            message: "",
        })
    }

    handleOnClick = () => {
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);
        const text = calculateText(number, random);
        this.setState({
            message: text,
        })
    }
    render() {
        console.log(this.state.random);
        return (
            <div className="Game">
                <p className="titulo">Adivina el numero que estoy pensando entre el 1 - 100</p>
                <input 
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                    className="textoo"
                />
                <br/>
                <button onClick={this.handleOnClick} className="botoon">Probar</button>
                <p className={(this.state.message) && 'resultado'}>{this.state.message }</p>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random() * (max-min) + min);
}

function calculateText(number, random){
    if(number === random){
        return "Felicidades, has acertado"
    }
    else if((number - random) <= 3 && (number - random) > 0){
        return "Un poco mas hacia abajo"
    }
    else if((random - number) <= 3 && (random - number) > 0){
        return "Un poco mas hacia arriba"
    }
    else if(number < random){
        return "Mas hacia arriba"
    }
    else if(number > random){
        return "Mas hacia abajo"
    }
}