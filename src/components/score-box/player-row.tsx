/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useMemo } from "react";
import {
  PlayerRowContainer,
  PlayerNameContainer,
  PointsContainer,
  GamePointsContainer,
  PointsContainerEmpty,
} from "./player-row.css";
import type { z } from "zod";
import servingPNG from "./serving.png";
import type { FixtureSchema } from "../../server/api/schema";
import Image from "next/image";

interface IProps {
  playerIndex: number;
  fixture: z.infer<typeof FixtureSchema>;
}

export function PlayerRow(props: IProps) {
  const setSummaries = useMemo(() => {
    const summaries: { games: number; won: boolean }[] = [];
    for (const set of props.fixture.sets) {
      summaries.push({
        games: set.games.reduce(
          (acc, g) => (g.winnerPlayerIndex === props.playerIndex ? 1 : 0) + acc,
          0
        ),
        won: set.winnerPlayerIndex === props.playerIndex,
      });
    }
    return summaries;
  }, [props.playerIndex, props.fixture]);

  const currentGamePoints = useMemo(() => {
    const isFirstPlayer = props.playerIndex === 0;
    if (props.fixture.sets.length > 0) {
      const currentSet = props.fixture.sets[props.fixture.sets.length - 1]!;
      if (currentSet.winnerPlayerIndex === undefined) {
        if (currentSet.games.length > 0) {
          const currentGame = currentSet.games[currentSet.games.length - 1]!;
          if (currentGame.winnerPlayerIndex === undefined) {
            return isFirstPlayer
              ? currentGame.firstPlayerPoints
              : currentGame.secondPlayerPoints;
          }
        }
      }
    }
    return undefined;
  }, [props.playerIndex, props.fixture]);

  return (
    <div className={PlayerRowContainer}>
      <Image
        alt="serving"
        width={25}
        height={20}
        style={{ objectFit: "contain" }}
        src={props.fixture.players[props.playerIndex]?.flag ?? ""}
      />
      <div className={PlayerNameContainer}>
        {props.fixture.players[props.playerIndex]?.name}
      </div>

      <div
        style={{
          height: "80%",
          width: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.playerIndex === props.fixture.servingPlayerIndex && (
          <Image
            alt="serving"
            width={20}
            height={20}
            style={{ objectFit: "contain" }}
            src={servingPNG.src}
          />
        )}
      </div>

      {setSummaries.map((setSummary, index) => (
        <div
          className={GamePointsContainer}
          style={{ color: setSummary.won ? "#2594b9" : undefined }}
          key={index}
        >
          {setSummary.games}
        </div>
      ))}

      <div
        className={[
          PointsContainer,
          currentGamePoints === undefined && PointsContainerEmpty,
        ].join(" ")}
      >
        {/* -1 should never appear, 'PointsContainerEmpty' will hide it. It just exist to consume space */}
        <div>{currentGamePoints ?? -1}</div>
      </div>
    </div>
  );
}
