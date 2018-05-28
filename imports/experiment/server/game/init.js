import {taskData} from "./constants";

export const init = (treatment, players) => {
  players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
  });
  
  const task = _.shuffle(taskData);

  const rounds = [];
  _.times(task.length, i => {
    const stages = [
      {
        name: "response",
        displayName: "Response",
        durationInSeconds: 20
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
