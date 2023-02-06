import { Fragment } from "react";
import { PlayerRow } from "./player-row";
import {
  ContainerHorizontalBorder,
  PlayerRowDivider,
  ScoreBoxInnerContainer,
  ScoreBoxOuterContainer,
} from "./score-box.css";

export type Player = {
  id: number;
  name: string;
  flag: string;
};

export type Fixture = {
  sets: Array<{
    winnerPlayerId?: number;
    setNumber: number;
    isTieBreaker: boolean;
    playerScores: Array<{
      playerId: number;
      games: number;
      tiebreakerGames: number;
    }>;
  }>;
};

const players: Player[] = [
  {
    id: 0,
    name: "NADAL",
    flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Spain.jpg",
  },
  {
    id: 1,
    name: "FEDERER",
    flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Switzerland.jpg",
  },
];

const fixture: Fixture = {
  sets: [
    {
      setNumber: 1,
      isTieBreaker: false,
      playerScores: [
        {
          playerId: 0,
          games: 5,
          tiebreakerGames: 0,
        },
        {
          playerId: 1,
          games: 7,
          tiebreakerGames: 0,
        },
      ],
    },
    {
      setNumber: 2,
      isTieBreaker: false,
      playerScores: [
        {
          playerId: 0,
          games: 3,
          tiebreakerGames: 0,
        },
        {
          playerId: 1,
          games: 2,
          tiebreakerGames: 0,
        },
      ],
    },
  ],
};

export function ScoreBox() {
  return (
    <div className={ScoreBoxOuterContainer}>
      <div className={ContainerHorizontalBorder} />
      <div className={ScoreBoxInnerContainer}>
        {players.map((player, index) => (
          <Fragment key={player.id}>
            <PlayerRow player={player} fixture={fixture} />
            {index === 0 && <div className={PlayerRowDivider} />}
          </Fragment>
        ))}
      </div>
      <div className={ContainerHorizontalBorder} />
    </div>
  );
}
