import React from "react";
import Player1 from "./Player1";
import Player2 from "./Player2";

class GameMaster extends React.Component {
  render() {
    return (
      <div>
        <Player1 />
        <Player2 />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Set name for Player1:
          <input name="player1Name" />
        </label>

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Set name for Player2:
          <input name="player2Name" />
        </label>
      </div>
    );
  }
}

export default GameMaster;
