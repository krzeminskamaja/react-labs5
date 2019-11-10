import React from "react";

class Player2 extends React.Component {
  render() {
    return(
      <div>
            <h1>I'm Player1</h1>
            <label>Name: {this.props.name}</label>
        </div>
    );
  }
}
export default Player2;
