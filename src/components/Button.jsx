import React from "react";
import "../Style.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.class}
        style={{ background: this.props.bckground }}
        onClick={this.props.Click}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
