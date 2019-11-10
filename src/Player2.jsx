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
    {
      //const newNumber = this.state.counter+1;
       // this.setState({counter: newNumber});
      return 'Player2 is playing right now';
    }
      
    else
      return 'Play';
  }
  render() {
    return(
      <div>
            <h1>I'm Player2</h1>
            <label>Name: {this.props.name}</label>
            <br/>
            <label>Played {this.props.played} times</label>
            <div class="text-right">
            <Button  variant="danger" onClick={this.props.whenclick} disabled={this.props.pressed}>{this.updateLabel(this.props.pressed)}</Button>
            </div>
        </div>
    );
  }
}
export default Player2;
