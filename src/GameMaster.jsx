import React from "react";
import Player1 from "./Player1.jsx";
import Player2 from "./Player2.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import { get } from 'https';
import Button from 'react-bootstrap/Button'

class GameMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namePlayer1: 'Ola',
      namePlayer2: 'Ala',
      buttonPlayer1: 1,
      buttonPlayer2: 0,
      gameCounter1: 1,
      gameCounter2: 0
    };
    this.firstNameChanges = this.firstNameChanges.bind(this);
    this.scndNameChanges = this.scndNameChanges.bind(this);
    this.button2Clicked = this.button2Clicked.bind(this);
    this.button1Clicked = this.button1Clicked.bind(this);
  }

  firstNameChanges(e){
    const newValue = e.target.value;
      this.setState({namePlayer1: newValue,gameCounter1: 0});
  }

  scndNameChanges(e){

    const newValue = e.target.value;
        this.setState({namePlayer2: newValue, gameCounter2: 0 });
    }
  
  button1Clicked(e){
    const numberOfGames = this.state.gameCounter1+1;
      this.setState({buttonPlayer1: 1,buttonPlayer2: 0,gameCounter1: numberOfGames});
  }
  button2Clicked(e){
    const playing = 'This user is playing right now';
    const play = 'Play';
    const numberOfGames = this.state.gameCounter2+1;
    this.setState({buttonPlayer1: 0,buttonPlayer2: 1,gameCounter2: numberOfGames});
}
  render() {
    return (
      <div>
        <Player1 played={this.state.gameCounter1} name={this.state.namePlayer1} whenclick={this.button1Clicked} pressed = {this.state.buttonPlayer1}/>

        <Player2 played={this.state.gameCounter2} name={this.state.namePlayer2} whenclick={this.button2Clicked} pressed = {this.state.buttonPlayer2}/>
        <br/>
        <label>
          Set name for Player1:
          <input type="text" name="namePlayer1" onChange={this.firstNameChanges} value={this.state.namePlayer1}/>
        </label>
        <br/>
        <label>
          Set name for Player2:
          <input type="text" name="namePlayer2" onChange={this.scndNameChanges} value={this.state.namePlayer2}/>
        </label>
       
      </div>
    );
  }
}

export default GameMaster;
