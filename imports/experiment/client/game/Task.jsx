import React from "react";

export default class Task extends React.Component {
  handleSubmit = answer => {
    const { player } = this.props;
    player.round.set("answer", answer);
    player.stage.submit();
  };

  render() {
    const { round } = this.props;
    const task = round.get("task");

    return (
      <div className="task">
        <button
          className="pt-button pt-minimal pt-large left"
          onClick={() => this.handleSubmit(task.options[0])}
        >
          {task.options[0]}
        </button>
        <button
          className="pt-button pt-minimal pt-large right"
          onClick={() => this.handleSubmit(task.options[1])}
        >
          {task.options[1]}
        </button>

        <div className="task-stimulus">
          <img src={"/experiment/faces/"+task.image} className="task-image" />
        </div>

        <button
          className="pt-button pt-minimal pt-large left"
          onClick={() => this.handleSubmit(task.options[2])}
        >
          {task.options[2]}
        </button>
        <button
          text={"something"}
          className="pt-button pt-minimal pt-large right"
          onClick={() => this.handleSubmit(task.options[0])}
        >
          {task.options[3]}
        </button>
      </div>
    );
  }
}
