import { z } from "zod";
import { FixtureSchema } from "../schema";

import { createTRPCRouter, publicProcedure } from "../trpc";

let FixtureState: z.infer<typeof FixtureSchema> = {
  firstPlayerId: 0,
  secondPlayerId: 1,
  servingPlayerId: 0,
  sets: [
    {
      winnerPlayerId: 0,
      setNumber: 1,
      tiebreaker: {
        isTieBreaker: false,
        firstPlayerTiebreakerPoints: 0,
        secondPlayerTiebreakerPoints: 0,
      },
      games: [
        {
          winnerPlayerId: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "15",
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "15",
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "30",
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: "15",
          secondPlayerPoints: "40",
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: "30",
          secondPlayerPoints: "40",
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "0",
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "0",
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "0",
        },
      ],
    },
    {
      setNumber: 2,
      tiebreaker: {
        isTieBreaker: false,
        firstPlayerTiebreakerPoints: 0,
        secondPlayerTiebreakerPoints: 0,
      },
      games: [
        {
          winnerPlayerId: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "0",
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: "0",
          secondPlayerPoints: "40",
        },
        {
          firstPlayerPoints: "0",
          secondPlayerPoints: "40",
        },
      ],
    },
  ],
};

export const syncRouter = createTRPCRouter({
  get: publicProcedure.input(z.undefined()).query(() => {
    return FixtureState;
  }),
  push: publicProcedure.input(FixtureSchema).mutation((req) => {
    FixtureState = req.input;
    return FixtureState;
  }),
});
