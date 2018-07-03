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

          <p>
            In the following, <strong>you will be shown a few pairs of eyes</strong>. For each
            pair of eyes, <strong>there are four emotion</strong> words around it, and you are
            asked to <strong>select which one of the four words best describes what the
            person in the picture is thinking or feeling</strong>.
          </p>

          <p>
            Before making your selection, please <strong>make sure that you have read
            all 4 words</strong>. If you do not know what a word means, <strong>you can look up
            its definition by hovering over that word</strong>. You may feel that more
            than one word is applicable, but please select only one word that
            you consider to be most suitable.
          </p>

          <p>
            <strong>
              {treatment.stageDuration === 0
                ? " but you will not be timed."
                : " You have at most  " +
                  treatment.stageDuration +
                  " seconds in each task, so please try to make the selection as quickly as possible."}
            </strong>
          </p>

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
