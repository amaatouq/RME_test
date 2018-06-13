import SimpleSchema from "simpl-schema";

export const conditions = {
  playerCount: {
    description: "The Number of players participating in the given game",
    type: SimpleSchema.Integer,
    max: 1
  },
  stageDuration: {
    description:
      "The maximum duration for the participant to make a choice (0 = unlimited)",
    type: SimpleSchema.Integer,
    max: 1000
  },
  basePay: {
    description:
      "The amount for base pay (i.e., showing up and completing the experiment)",
    type: Number,
    min: 0,
    max: 100
  }
};
