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
      namePlayer1: '',
      namePlayer2: ''
    };
    this.firstNameChanges = this.firstNameChanges.bind(this);
    this.scndNameChanges = this.scndNameChanges.bind(this);
    
  }

  firstNameChanges(e){
    const newValue = e.target.value;
      this.setState({namePlayer1: newValue});
  }

  scndNameChanges(e){

    const newValue = e.target.value;
        this.setState({namePlayer2: newValue });
    }
  render() {
    return (
      <div>
        <Player1 name={this.state.namePlayer1}/>

        <Player2 name={this.state.namePlayer2}/>
        <br/>
        <label>
          Set name for Player1:
          <input type="text" name="namePlayer1" onChange={this.firstNameChanges} value={this.state.namePlayer1}/>
        </label>

        <label>
          Set name for Player2:
          <input type="text" name="namePlayer2" onChange={this.scndNameChanges} value={this.state.namePlayer2}/>
        </label>
      </div>
    );
  }
}

export default GameMaster;
