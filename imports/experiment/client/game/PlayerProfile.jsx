import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  renderProfile() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h3>Your Profile</h3>
        <img src={player.get("avatar")} className="profile-avatar" />
      </div>
    );
  }

  renderScore() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h4>Total score</h4>
        <span>{player.get("score")}</span>
      </div>
    );
  }

  render() {
    const { game, stage } = this.props;
    return (
      <aside className="pt-card player-profile">
        {this.renderProfile()}
        {this.renderScore()}
        {game.treatment.stageDuration === 0 ? null : (
          <Timer stage={stage} />
        )}
      </aside>
    );
  }
}
