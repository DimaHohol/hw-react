import React from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./Style.css";

class App extends React.Component {
  state = {
    statusFirstModal: false,
    statusSecondModal: false,
  };

  openFirstModal = () => {
    this.setState(() => {
      return { statusFirstModal: true };
    });
  };

  openSecondModal = () => {
    this.setState(() => {
      return { statusSecondModal: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { statusFirstModal: false, statusSecondModal: false };
    });
  };

  handleClick = () => {
    console.log("По кнопке кликнули");
  };

  render() {
    return (
      <>
        <div className="header"></div>
        <div className="main-content">
          <div className="main-modal-window">
            <div className="main-body">
              <Button
                class={`button`}
                bckground={`rgba(255, 0, 0)`}
                text={"Open first modal"}
                Click={this.openFirstModal}
              />
              <Button
                class={`button`}
                bckground={`rgba(0, 0, 255)`}
                text={"Open second modal"}
                Click={this.openSecondModal}
              />
            </div>
            <>
              {this.state.statusFirstModal && (
                <Modal
                  Click={this.closeModal}
                  actionX={
                    <Button
                      class="button-modal-x"
                      text={<p>X</p>}
                      Click={this.closeModal}
                    />
                  }
                  action={
                    <Button
                      class="button-modal"
                      text={"Cancel"}
                      Click={this.closeModal}
                    />
                  }
                  header={<p>Do you want to delete this file?</p>}
                  content={
                    "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
                  }
                />
              )}
            </>
            <>
              {this.state.statusSecondModal && (
                <Modal
                  Click={this.closeModal}
                  actionX={
                    <Button
                      class="button-modal-x"
                      text={<p>X</p>}
                      Click={this.closeModal}
                    />
                  }
                  action={
                    <Button
                      class="button-modal"
                      text={"Cancel"}
                      Click={this.closeModal}
                    />
                  }
                  header={<p>Star Wars</p>}
                  content={
                    "Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film"
                  }
                />
              )}
            </>
          </div>
        </div>
        <div className="footer"></div>
      </>
    );
  }
}

export default App;
