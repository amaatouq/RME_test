export default {
  onGameStart(game, players) {
    console.log("-------------");
    console.log(game._id, "has started");
  },

  onRoundStart(game, round, players) {},

  onStageStart(game, round, stage, players) {},

  onStageEnd(game, round, stage, players) {},

  onRoundEnd(game, round, players) {
    console.log("round", round.index + 1, "For game ", game._id, "has end");
    //compute the score at the end of the round
    const correctAnswer = round.get("task").correctAnswer;

    players.forEach(player => {
      const answer = player.round.get("answer");
      // If no guess given, score is 0
      const score = !answer ? 0 : correctAnswer === answer ? 1 : 0;

      player.set("score", player.get("score") + Math.round(score));
    });
  },

  onGameEnd(game, players) {
    const conversionRate = 1 / 18.0;
    console.log("game ", game._id, "has end");
    console.log("-------------");
    //calculate the bonus at the end of the round
    players.forEach(player => {
      player.set(
        "bonus",
        Math.round(player.get("score") * conversionRate) || 0
      );
    });
  }

  // ===========================================================================
  // => onSet, onAppend and onChanged ==========================================
  // ===========================================================================

  // onSet, onAppend and onChanged are called on every single update made by all
  // players in each game, so they can rapidly become quite expensive and have
  // the potential to slow down the app. Use wisely.
  // It is very useful to be able to react to each update a user makes. Try
  // nontheless to limit the amount of computations and database saves (.set)
  // done in this callback. You can also try to limit the amount of calls to
  // set() and append() you make (avoid calling them on a continuous drag of a
  // slider for example) and inside the callbacks use the `key` argument at the
  // very beginning of the callback to filter out which keys your need to run
  // logic against.
  // If you have not using these callbacks, comment them out so the system does
  // not call them for nothing.

  // // onSet is called when the experiment code call the .set() method
  // // on games, rounds, stages, players, playerRounds or playerStages.
  // onSet(
  //   game,
  //   round,
  //   stage,
  //   players,
  //   player, // Player who made the change
  //   target, // Object on which the change was made (eg. player.set() => player)
  //   targetType, // Type of object on which the change was made (eg. player.set() => "player")
  //   key, // Key of changed value (e.g. player.set("score", 1) => "score")
  //   value, // New value
  //   prevValue // Previous value
  // ) {
  //   // // Example filtering
  //   // if (key !== "value") {
  //   //   return;
  //   // }
  // },

  // // onSet is called when the experiment code call the `.append()` method
  // // on games, rounds, stages, players, playerRounds or playerStages.
  // onAppend(
  //   game,
  //   round,
  //   stage,
  //   players,
  //   player, // Player who made the change
  //   target, // Object on which the change was made (eg. player.set() => player)
  //   targetType, // Type of object on which the change was made (eg. player.set() => "player")
  //   key, // Key of changed value (e.g. player.set("score", 1) => "score")
  //   value, // New value
  //   prevValue // Previous value
  // ) {
  //   // Note: `value` is the single last value (e.g 0.2), while `prevValue` will
  //   //       be an array of the previsous valued (e.g. [0.3, 0.4, 0.65]).
  // },

  // onChange is called when the experiment code call the `.set()` or the
  // `.append()` method on games, rounds, stages, players, playerRounds or
  // playerStages.
  // onChange(
  //   game,
  //   round,
  //   stage,
  //   players,
  //   player, // Player who made the change
  //   target, // Object on which the change was made (eg. player.set() => player)
  //   targetType, // Type of object on which the change was made (eg. player.set() => "player")
  //   key, // Key of changed value (e.g. player.set("score", 1) => "score")
  //   value, // New value
  //   prevValue, // Previous value
  //   isAppend // True if the change was an append, false if it was a set
  // ) {
  //   // `onChange` is useful to run server-side logic for any user interaction.
  //   // Note the extra isAppend boolean that will allow to differenciate sets and
  //   // appends.
  // }
};
