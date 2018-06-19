import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";

export default class Sorry extends React.Component {
  static stepName = "Sorry";

  render() {
    const { player } = this.props;
    let msg;
    switch (player.exitStatus) {
      case "gameFull":
        msg = "Games filled up too fast...";
        break;
      // case "gameLobbyTimedOut":
      //   msg = "???";
      //   break;
      // case "playerLobbyTimedOut":
      //   msg = "???";
      //   break;
      case "playerEndedLobbyWait":
        msg =
          "You decided to stop waiting, we are sorry it was too long a wait.";
        break;
      default:
        msg = "Unfortunately the Game was cancelled...";
        break;
    }

    const pay = player.exitStatus !== "gameFull";

    return (
      <Centered>
        <div className="score">
          <h1>Sorry!</h1>

          <p>Sorry, you were not able to play today! {msg}</p>

          {pay ? (
            <p>
              Please submit{" "}
              <strong>
                <em>{player._id}</em>{" "}
              </strong>in order to receive the base payment for your attempt.{" "}
            </p>
          ) : (
            <p>
              Please return the HIT now so our platform does not register your
              MTurk ID as someone who already participated.
            </p>
          )}

          <p>Feel free to come back for the next scheduled game.</p>

          {/*This is not really needed .. all of these people failed to start the game .. if we allow them to submit, then their data will be deleted, we don't want that*/}
          {/*<p>*/}
          {/*{hasNext && !player.exitStatus === "gameFull" ? (*/}
          {/*<button*/}
          {/*className="pt-button pt-intent-primary"*/}
          {/*type="button"*/}
          {/*onClick={() => onSubmit()}*/}
          {/*>*/}
          {/*Done*/}
          {/*</button>*/}
          {/*) : (*/}
          {/*""*/}
          {/*)}*/}
          {/*</p>*/}
        </div>
      </Centered>
    );
  }
}
