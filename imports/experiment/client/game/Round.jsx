import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import Task from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="content">
          <PlayerProfile player={player} stage={stage} game={game} />
          <Task round={round} stage={stage} player={player} game={game} />
        </div>
      </div>
    );
  }
}
