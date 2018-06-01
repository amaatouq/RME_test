export const onRoundStart = (game, round, players) => {};

export const onStageEnd = (game, round, stage, players) => {};

export const onRoundEnd = (game, round, players) => {
  //compute the score
  const correctAnswer = round.get("task").correctAnswer;

  players.forEach(player => {
    const answer = player.round.get("answer");
    // If no guess given, score is 0
    const score = !answer ? 0 : correctAnswer === answer ? 1 : 0;
    console.log("correctAnswer ", correctAnswer);
    console.log("answer",answer);
    console.log("score now is ",score);

    player.set("score", player.get("score") + Math.round(score));
  });
};
