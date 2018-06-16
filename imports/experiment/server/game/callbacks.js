export const onRoundStart = (game, round, players) => {
  console.log("round",round.index+1,"For game ", game._id, "has started");
};

export const onStageEnd = (game, round, stage, players) => {};

export const onRoundEnd = (game, round, players) => {
  //compute the score
  const correctAnswer = round.get("task").correctAnswer;

  players.forEach(player => {
    const answer = player.round.get("answer");
    // If no guess given, score is 0
    const score = !answer ? 0 : correctAnswer === answer ? 1 : 0;

    player.set("score", player.get("score") + Math.round(score));
  });
};

export const onGameEnd = (game, players) => {
  const conversionRate = 1 / 18.0;
  console.log("The game has ended for ", game._id);
  players.forEach(player => {
    player.set("bonus", Math.round(player.get("score") * conversionRate) || 0);
  });
};
