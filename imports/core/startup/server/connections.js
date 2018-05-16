import { GameLobbies } from "../../api/game-lobbies/game-lobbies.js";
import { Players } from "../../api/players/players.js";

export const connections = {};

const playerInLobby = (playerId, key = "playerIds") => {
  const query = {
    status: "running",
    gameId: { $exists: false },
    timedOutAt: { $exists: false },
    [key]: playerId
  };

  return GameLobbies.findOne(query);
};

export const savePlayerId = (connId, playerId) => {
  connections[connId] = playerId;

  const player = Players.findOne(playerId);
  if (!player.readyAt) {
    return;
  }

  const lobby = playerInLobby(playerId, "queuedPlayerIds");
  if (!lobby) {
    return;
  }

  GameLobbies.update(lobby._id, {
    $inc: { readyCount: 1 },
    $addToSet: { playerIds: playerId }
  });
};

Meteor.onConnection(conn => {
  conn.onClose(() => {
    if (!connections[conn.id]) {
      return;
    }

    const playerId = connections[conn.id];

    const lobby = playerInLobby(playerId);

    if (!lobby) {
      return;
    }

    GameLobbies.update(lobby._id, {
      $inc: { readyCount: -1 },
      $pull: { playerIds: playerId }
    });

    delete connections[conn.id];
  });
});
