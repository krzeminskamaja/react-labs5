import React from "react";
import Player1 from "./Player1";
import Player2 from "./Player2";
import "bootstrap/dist/css/bootstrap.css";

class GameMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namePlayer1: "Ola",
      namePlayer2: "Ala",
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

  firstNameChanges(e) {
    const newValue = e.target.value;
    this.setState({ namePlayer1: newValue, gameCounter1: 0 });
  }

  scndNameChanges(e) {
    const newValue = e.target.value;
    this.setState({ namePlayer2: newValue, gameCounter2: 0 });
  }

  // eslint-disable-next-line no-unused-vars
  button1Clicked(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const numberOfGames = this.state.gameCounter1 + 1;
    this.setState({
      buttonPlayer1: 1,
      buttonPlayer2: 0,
      gameCounter1: numberOfGames
    });
  }

  // eslint-disable-next-line no-unused-vars
  button2Clicked(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const numberOfGames = this.state.gameCounter2 + 1;
    this.setState({
      buttonPlayer1: 0,
      buttonPlayer2: 1,
      gameCounter2: numberOfGames
    });
  }

  render() {
    return (
      <div>
        <Player1
          played={this.state.gameCounter1}
          name={this.state.namePlayer1}
          whenclick={this.button1Clicked}
          pressed={this.state.buttonPlayer1}
        />

        <Player2
          played={this.state.gameCounter2}
          name={this.state.namePlayer2}
          whenclick={this.button2Clicked}
          pressed={this.state.buttonPlayer2}
        />
        <br />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Set name for Player1:
          <input
            type="text"
            name="namePlayer1"
            onChange={this.firstNameChanges}
            value={this.state.namePlayer1}
          />
        </label>
        <br />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Set name for Player2:
          <input
            type="text"
            name="namePlayer2"
            onChange={this.scndNameChanges}
            value={this.state.namePlayer2}
          />
        </label>
      </div>
    );
  }
}

export default GameMaster;
