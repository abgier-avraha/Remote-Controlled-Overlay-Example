import { z } from "zod";

export const PlayerSchema = z.object({
  id: z.number(),
  name: z.string(),
  flag: z.string(),
});

export const PointsEnum = z.enum(["0", "15", "30", "40", "AD"]);

export const GameSchema = z.object({
  winnerPlayerId: z.number().optional(),
  advantagePlayerId: z.number().optional(),
  firstPlayerPoints: PointsEnum,
  secondPlayerPoints: PointsEnum,
});

export const SetSchema = z.object({
  winnerPlayerId: z.number().optional(),
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
  firstPlayerId: z.number(),
  secondPlayerId: z.number(),
  servingPlayerId: z.number(),
  sets: SetSchema.array(),
});
