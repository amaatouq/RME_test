export const onRoundStart = (game, round, players) => {};

export const onStageEnd = (game, round, stage, players) => {};

export const onRoundEnd = (game, round, players) => {
  players.forEach(player => {
    const value = player.round.get("value") || 0;
    const prevScore = player.get("score") || 0;
    player.set("score", prevScore + value);
  });
};
