import SimpleSchema from "simpl-schema";

import { Batches } from "../batches/batches";
import { BelongsTo, HasManyByRef, TimestampSchema } from "../default-schemas";
import { DebugModeSchema } from "../default-schemas.js";
import { Players } from "../players/players";
import { Rounds } from "../rounds/rounds";
import { Treatments } from "../treatments/treatments";
import { GameLobbies } from "../game-lobbies/game-lobbies";

export const Games = new Mongo.Collection("games");

Games.schema = new SimpleSchema({
  estFinishedTime: {
    type: Date
  },
  finishedAt: {
    type: Date,
    optional: true
  },
  currentStageId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id
  }
});

if (Meteor.isDevelopment || Meteor.settings.public.debug_gameDebugMode) {
  Games.schema.extend(DebugModeSchema);
}

Games.schema.extend(TimestampSchema);
Meteor.startup(() => {
  Games.schema.extend(BelongsTo(GameLobbies, false, false));
  Games.schema.extend(BelongsTo(Treatments));
  Games.schema.extend(HasManyByRef(Rounds));
  Games.schema.extend(HasManyByRef(Players));
  Games.schema.extend(BelongsTo(Batches));
  // We are denormalizing the parent batch status in order to make clean queries
  Games.schema.extend(Batches.statusSchema);
});
Games.attachSchema(Games.schema);
