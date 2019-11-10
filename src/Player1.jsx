import React from "react";

class Player1 extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return(
        <div>
            <h1>I'm Player1</h1>
            <label>Name: {this.props.name}</label>
            <br/>
        </div>
    );
  }
}
export default Player1;
