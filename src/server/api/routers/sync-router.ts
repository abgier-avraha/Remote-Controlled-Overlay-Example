import { z } from "zod";
import { FixtureSchema } from "../schema";

import { createTRPCRouter, publicProcedure } from "../trpc";

let FixtureState: z.infer<typeof FixtureSchema> = {
  players: [
    {
      name: "NADAL",
      flag: "https://flagcdn.com/w80/es.png",
    },
    {
      name: "FEDERER",
      flag: "https://flagcdn.com/w80/ch.png",
    },
  ],
  servingPlayerIndex: 0,
  sets: [
    {
      winnerPlayerIndex: 0,
      setNumber: 1,
      tiebreaker: {
        isTieBreaker: false,
        firstPlayerTiebreakerPoints: 0,
        secondPlayerTiebreakerPoints: 0,
      },
      games: [
        {
          winnerPlayerIndex: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "15",
        },
        {
          winnerPlayerIndex: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "15",
        },
        {
          winnerPlayerIndex: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "30",
        },
        {
          winnerPlayerIndex: 1,
          firstPlayerPoints: "15",
          secondPlayerPoints: "40",
        },
        {
          winnerPlayerIndex: 1,
          firstPlayerPoints: "30",
          secondPlayerPoints: "40",
        },
        {
          winnerPlayerIndex: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "0",
        },
        {
          winnerPlayerIndex: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "0",
        },
        {
          winnerPlayerIndex: 0,
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
          winnerPlayerIndex: 0,
          firstPlayerPoints: "40",
          secondPlayerPoints: "0",
        },
        {
          winnerPlayerIndex: 1,
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
