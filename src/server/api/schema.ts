import { z } from "zod";

export const PlayerSchema = z.object({
  name: z.string(),
  flag: z.string(),
});

export const PointsEnum = z.enum(["0", "15", "30", "40", "AD"]);

export const GameSchema = z.object({
  winnerPlayerIndex: z.number().optional(),
  firstPlayerPoints: PointsEnum,
  secondPlayerPoints: PointsEnum,
});

export const SetSchema = z.object({
  winnerPlayerIndex: z.number().optional(),
  setNumber: z.number(),
  tiebreaker: z.object({
    isTieBreaker: z.boolean(),
    firstPlayerTiebreakerPoints: z.number(),
    secondPlayerTiebreakerPoints: z.number(),
  }),
  games: GameSchema.array(),
});

export const FixtureSchema = z.object({
  players: PlayerSchema.array(),
  servingPlayerIndex: z.number().optional(),
  sets: SetSchema.array(),
});
