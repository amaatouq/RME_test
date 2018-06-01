import React from "react";

import Centered from "../../../core/ui/components/Centered.jsx";
import { Position, Tooltip } from "@blueprintjs/core";

export default class Instructions extends React.Component {
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
