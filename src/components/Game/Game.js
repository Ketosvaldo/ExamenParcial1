import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            number: "",
            message: "",
            random: "",
            player: "0",
            cpu: "0",
        }
    }

    handleOnChange = e => {
        const {target: {value}} = e;
        console.log(value);
        const newnumber = generateRandomNumber(3);
        if(value.trim() > 0){
            this.setState({
                number: value,
                random: newnumber,
            });
        }
        this.setState({
            message: "",
        })
    }

    handleOnClick = () => {
        console.log(this.state.number);
        console.log(this.state.random);
        const number = parseInt(this.state.number);
        const random = parseInt(this.state.random);
        let text = calculateText(number, random);
        this.setState({
            message: text,
        })
        //------------------
        if(number == 1){
            if(random == 2){
                this.setState({
                    cpu: parseInt(this.state.cpu) + 1,
                })
            }
            else if(random == 3){
                this.setState({
                    player: parseInt(this.state.player) + 1,
                })
            }
        }
        else if(number == 2){
            if(random == 1){
                this.setState({
                    player: parseInt(this.state.player) + 1,
                })
            }
            else if(random == 3){
                this.setState({
                    cpu: parseInt(this.state.cpu) + 1,
                })
            }
        }
        else if(number == 3){
            if(random == 2){
                this.setState({
                    player: parseInt(this.state.player) + 1,
                })
            }
            else if(random == 1){
                this.setState({
                    cpu: parseInt(this.state.cpu) + 1,
                })
            }
        }
        if(parseInt(this.state.cpu) == 2 || parseInt(this.state.player) == 2){
            text = winner(parseInt(this.state.player), parseInt(this.state.cpu));
            this.setState({
                cpu: "0",
                player: "0",
                message: text,
            })
        }
    }
    render() {
        return (
            <div className="Game">
                <p className="titulo">Piedra, papel o tijeras</p>
                <h1>1)</h1>
                <img 
                    src="https://cdn77.pressenza.com/wp-content/uploads/2017/11/2417C4AC-F2BE-4A94-817A-CFF04360DEE9-720x540.png"
                    width = "200px"
                    display="inline-block"
                />
                <h1>2)</h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Paper_sheet.jpg"
                    width = "150px"
                    display="inline-block"
                />
                <h1>3)</h1>
                <img 
                    src="https://www.truper.com/media/product/3a9/tijera-para-oficina-6-1-2-de-acero-inoxidable-d05.jpg"
                    width = "170px"
                />
                <br/>
                <input type="text" onChange={this.handleOnChange}/>
                <button onClick={this.handleOnClick}> Subir </button>
                <p className={(this.state.message) && 'resultado'}>{this.state.message }</p>
                <br/>
                <p>Jugador: {this.state.player}</p>
                <p>Computadora: {this.state.cpu}</p>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min = 1){
    return Math.floor(Math.random() * (max-min) + min);
}

function winner(jugador, maquina){
    if(jugador == 2){
        return "Has ganado :D"
    }
    else if(maquina == 2){
        return "Has perdido UnU"
    }
}

function calculateText(number, random){
    if(number == random){
        return "Empate hermano"
    }
    else if(number == 1){
        if(random == 2){
            return "Punto para la computadora"
        }
        else{
            return "Punto para el jugador"
        }
    }
    else if(number == 2){
        if(random == 1){
            return "Punto para el jugador"
        }
        else{
            return "Punto para la computadora"
        }
    }
    else if(number == 3){
        if(random == 2){
            return "Punto para el jugador";
        }
        else{
            return "Punto para la computadora";
        }
    }
}