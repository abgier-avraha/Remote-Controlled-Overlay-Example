import { useMemo } from "react";
import { Player } from "./score-box";
import {
  PlayerRowContainer,
  PlayerFlagContainer,
  PlayerNameContainer,
  PointsContainer,
  GamePointsContainer,
  PointsContainerEmpty,
} from "./player-row.css";
import { Fixture } from "../../services/mock-score-service";

interface IProps {
  player: Player;
  fixture: Fixture;
}

export function PlayerRow(props: IProps) {
  const setSummaries = useMemo(() => {
    const summaries: { games: number; won: boolean }[] = [];
    for (const set of props.fixture.sets) {
      summaries.push({
        games: set.games.reduce(
          (curr, g) => (g.winnerPlayerId === props.player.id ? 1 : 0) + curr,
          0
        ),
        won: set.winnerPlayerId === props.player.id,
      });
    }
    return summaries;
  }, [props.player.id, props.fixture]);

  const currentGamePoints = useMemo(() => {
    const isFirstPlayer = props.fixture.firstPlayerId === props.player.id;
    if (props.fixture.sets.length > 0) {
      const currentSet = props.fixture.sets[props.fixture.sets.length - 1]!;
      if (currentSet.winnerPlayerId === undefined) {
        if (currentSet.games.length > 0) {
          const currentGame = currentSet.games[currentSet.games.length - 1]!;
          if (currentGame.winnerPlayerId === undefined) {
            return isFirstPlayer
              ? currentGame.firstPlayerPoints
              : currentGame.secondPlayerPoints;
          }
        }
      }
    }
    return undefined;
  }, [props.player.id, props.fixture]);

  return (
    <div className={PlayerRowContainer}>
      <img
        className={PlayerFlagContainer}
        style={{ objectFit: "contain" }}
        src={props.player.flag}
      />
      <div className={PlayerNameContainer}>{props.player.name}</div>

      {/* TODO: animated as it appears */}
      {setSummaries.map((setSummary, index) => (
        <div
          className={GamePointsContainer}
          style={{ color: setSummary.won ? "#2594b9" : undefined }}
          key={index}
        >
          {setSummary.games}
        </div>
      ))}

      {/* TODO: animated as it appears/disappears */}

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