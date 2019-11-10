import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

class Player1 extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  updateLabel(isClicked) {
    if (isClicked) {
      // const newNumber = this.state.counter+1;
      // this.setState({counter: newNumber});
      return "Player1 is playing right now";
    }
    return "Play";
  }

  render() {
    return (
      <div>
        <h1>I am Player1</h1>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Name: {this.props.name}</label>
        <br />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Played {this.props.played} times</label>

        <div className="text-right">
          <Button
            variant="danger"
            onClick={this.props.whenclick}
            disabled={this.props.pressed}
          >
            {this.updateLabel(this.props.pressed)}
          </Button>
        </div>
      </div>
    );
  }
}
export default Player1;
