import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";
import { Position, Tooltip } from "@blueprintjs/core";

export default class Instructions extends React.Component {
  renderTaskExample() {
    return (
      <div className="round">
        <div className="content">
          <div
            className="task"
            style={{
              marginLeft: "10rem",
              marginBottom: "5rem",
              marginTop: "2rem"
            }}
          >
            <Tooltip
              content={
                <span>
                  <em>Description:</em>
                  {" envious"}
                  <br />
                  <em>Sentence:</em>
                  {
                    " Tony was jealous of all the taller, better-looking boys in his class."
                  }
                </span>
              }
              usePortal={false}
              position={Position.TOP_LEFT}
              className={"left"}
            >
              <button
                className="pt-button pt-minimal pt-large"
                //onClick={() => this.handleSubmit(options[0].toLowerCase())}
              >
                Jealous
              </button>
            </Tooltip>

            <Tooltip
              className={"right"}
              content={
                <span>
                  <em>Description:</em>
                  {" distraught, feeling of terror or anxiety"}
                  <br />
                  <em>Sentence:</em>
                  {
                    " On waking to find the house on fire, the whole family was panicked."
                  }
                </span>
              }
              usePortal={false}
              position={Position.TOP_RIGHT}
            >
              <button
                className="pt-button pt-minimal pt-large"
                //onClick={() => this.handleSubmit(options[1].toLowerCase())}
              >
                Panicked
              </button>
            </Tooltip>

            <div className="task-stimulus">
              <img
                src={"/experiment/faces/RMET_Practise.png"}
                className="task-image"
              />
            </div>

            <Tooltip
              content={
                <span>
                  <em>Description:</em>
                  {
                    " conceited, self-important, having a big opinion of oneself"
                  }
                  <br />
                  <em>Sentence:</em>
                  {
                    " The arrogant man thought he knew more about politics than everyone else in the room."
                  }
                </span>
              }
              usePortal={false}
              position={Position.BOTTOM_LEFT}
              className={"left"}
            >
              <button
                className="pt-button pt-minimal pt-large"
                //onClick={() => this.handleSubmit(options[2].toLowerCase())}
              >
                Arrogant
              </button>
            </Tooltip>

            <Tooltip
              content={
                <span>
                  <em>Description:</em>
                  {" showing intense dislike"}
                  <br />
                  <em>Sentence:</em>
                  {
                    " The two sisters were hateful to each other and always fighting."
                  }
                </span>
              }
              usePortal={false}
              position={Position.BOTTOM_RIGHT}
              className={"right"}
            >
              <button
                className="pt-button pt-minimal pt-large"
                //onClick={() => this.handleSubmit(options[3].toLowerCase())}
              >
                Hateful
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> INSTRUCTIONS: </h1>

          <span>
            <p>
              For each set of eyes, choose which word best describes what the
              person in the picture is thinking or feeling.
            </p>

            <p>
              You may feel that more than one word is applicable but please
              choose just one word, the word which you consider to be most
              suitable. Before making your choice, make sure that you have read
              all 4 words. You should try to do the task as quickly as possible
              <strong>
                {treatment.stageDuration === 0
                  ? " but you will not be timed."
                  : " as you only have " +
                    treatment.stageDuration +
                    " seconds to make a choice"}
              </strong>
            </p>
            <p>
              If you do not know what a word means you can look up the
              definition by hovering over the word.
            </p>
          </span>

          <p>
            Here is an example, where the correct answer is:{" "}
            <strong>Panicked</strong>
          </p>
          {this.renderTaskExample()}
          <button
            type="button"
            className="pt-button pt-intent-nope pt-icon-double-chevron-left"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="pt-button pt-intent-primary"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <span className="pt-icon-standard pt-icon-double-chevron-right pt-align-right" />
          </button>
        </div>
      </Centered>
    );
  }
}
