import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { get } from 'https';
import Button from 'react-bootstrap/Button';

class Player2 extends React.Component {
  constructor(props){
    super(props);
}
  updateLabel(isClicked){
    if(isClicked)
      return 'Player2 is playing right now';
    else
      return 'Play';
  }
  render() {
    return(
      <div>
            <h1>I'm Player1</h1>
            <label>Name: {this.props.name}</label>
            <Button block variant="danger" onClick={this.props.whenclick} disabled={this.props.pressed}>{this.updateLabel(this.props.pressed)}</Button>
        </div>
    );
  }
}
export default Player2;
