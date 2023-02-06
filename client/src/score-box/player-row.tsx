import { useMemo } from "react";
import { Fixture, Player } from "./score-box";
import {
  PlayerRowContainer,
  PlayerFlagContainer,
  PlayerNameContainer,
} from "./player-row.css";
import { GameContainer } from "./score-box.css";

interface IProps {
  player: Player;
  fixture: Fixture;
}

export function PlayerRow(props: IProps) {
  const setWon = useMemo(() => {
    let won = 0;
    for (const set of props.fixture.sets) {
      if (
        set.playerScores[0].playerId == props.player.id &&
        set.playerScores[0].games >= 6 &&
        set.playerScores[0].games - set.playerScores[1].games >= 2
      ) {
        won++;
      } else if (
        set.playerScores[1].playerId == props.player.id &&
        set.playerScores[1].games >= 6 &&
        set.playerScores[1].games - set.playerScores[0].games >= 2
      ) {
        won++;
      }
    }
    return won;
  }, [props.player.id, props.fixture]);

  const gamesPerSet = useMemo(() => {
    let summaries = [];
    for (const set of props.fixture.sets) {
      summaries.push(
        set.playerScores.find((s) => s.playerId === props.player.id)?.games ?? 0
      );
    }
    return summaries;
  }, [props.player.id, props.fixture]);

  return (
    <div className={PlayerRowContainer}>
      <img
        className={PlayerFlagContainer}
        style={{ objectFit: "contain" }}
        src={props.player.flag}
      />
      <div className={PlayerNameContainer}>{props.player.name}</div>
      {/* TODO: compact different viewing mode */}
      {/* <div>Won {setWon} sets</div> */}
      {gamesPerSet.map((games, index) => (
        <div className={GameContainer} key={index}>
          {games}
        </div>
      ))}
    </div>
  );
}
