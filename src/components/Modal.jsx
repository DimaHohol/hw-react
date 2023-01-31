import React from "react";
import Button from "./Button";
import "../Style.css";

class Modal extends React.Component {
  render() {
    return (
      <div>
        <div className="overlay" onClick={this.props.Click}>
          <div className="modal">
            <div className="modal-body">
              <div className="modal-body-header">
                <h3>{this.props.header}</h3>
                {this.props.actionX}
              </div>
              <div className="modal-body-content">
                <p>{this.props.content}</p>
              </div>

              <div className="modal-body-footer">
                <Button class="button-modal" text={"OK"} />
                {this.props.action}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
