import React from "react";
import { Tooltip, Position } from "@blueprintjs/core";

export default class Task extends React.Component {
  handleSubmit = answer => {
    const { player } = this.props;
    player.round.set("answer", answer);
    player.stage.submit();
  };

  renderOption = (emotion, content, position, index) => {
    return (
      <div key={index}>
        <Tooltip
          content={content}
          usePortal={false}
          position={position}
          className={index % 2 === 0 ? "left" : "right"}
        >
          <button
            className="pt-button pt-minimal pt-large"
            onClick={() => this.handleSubmit(emotion.toLowerCase())}
          >
            {emotion}
          </button>
        </Tooltip>
      </div>
    );
  };

  renderTask = (taskImage, options, contents, displayPositions) => {
    const results = [];

    options.forEach((option, index) => {
      results.push(
        this.renderOption(
          option,
          contents[index],
          displayPositions[index],
          index
        )
      );

      //add the image
      index === 1
        ? results.push(
            <div className="task-stimulus" key={"taskImage"}>
              <img
                src={"/experiment/faces/" + taskImage}
                className="task-image"
              />
            </div>
          )
        : null;
    });

    return results;
  };

  render() {
    const { round } = this.props;
    const task = round.get("task");
    let contents = [];
    let options = [];
    const displayPositions = [
      Position.TOP_LEFT,
      Position.TOP_RIGHT,
      Position.BOTTOM_LEFT,
      Position.BOTTOM_RIGHT
    ];

    task.options.forEach(option => {
      contents.push(
        <span>
          <em>Description:</em>
          {" " + option.description}
          <br />
          <em>Sentence:</em>
          {" " + option.sentence}
        </span>
      );

      //capitalize 'option'
      options.push(
        option.emotion.charAt(0).toUpperCase() + option.emotion.slice(1)
      );
    });

    return (
      <div className="task">
        {this.renderTask(task.image, options, contents, displayPositions)}
      </div>
    );
  }
}
