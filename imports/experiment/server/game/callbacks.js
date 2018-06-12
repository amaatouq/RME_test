export const onRoundStart = (game, round, players) => {};

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

export const onGameEnd = (game, round, stage, players) => {
  const conversionRate = 1 / 18.0;
  console.log("The game has ended for ");
  players.forEach(player => {
    player.set("bonus", player.get("score") * conversionRate || 0);
  });
};

export const onGameEnd = (game, players) => {};
