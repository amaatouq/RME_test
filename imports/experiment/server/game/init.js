import { taskData } from "./constants";

export const init = (treatment, players) => {
  players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
    player.set("score", 0);
  });

  //if the stage duration is less than 5 seconds (can't work), then we set it to unlimited (i.e., 86400)
  const roundDuration =
    treatment.stageDuration > 5 ? treatment.stageDuration : 86400;

  //we shuffle the task and make sure that we skip the practice example
  const task = _.shuffle(taskData.slice(1));

  const rounds = [];
  _.times(task.length, i => {
    const stages = [
      {
        name: "response",
        displayName: "Response",
        durationInSeconds: roundDuration
      }
    ];

    rounds.push({
      stages,
      task: task[i]
    });
  });

  return {
    rounds,
    players
  };
};
