import { Fragment } from "react";
import { useMockFixture } from "../../services/mock-score-service";
import { PlayerRow } from "./player-row";
import {
  ContainerHorizontalBorder,
  PlayerRowDivider,
  ScoreBoxInnerContainer,
  ScoreBoxOuterContainer,
} from "./score-box.css";

// TODO: move tvo service
export type Player = {
  id: number;
  name: string;
  flag: string;
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

export function ScoreBox() {
  const fixture = useMockFixture();

  return (
    <div className={ScoreBoxOuterContainer}>
      <div className={ScoreBoxInnerContainer}>
        <div className={ContainerHorizontalBorder} />
        <div>
          {players.map((player, index) => (
            <Fragment key={player.id}>
              <PlayerRow player={player} fixture={fixture} />
              {index === 0 && <div className={PlayerRowDivider} />}
            </Fragment>
          ))}
        </div>
        <div className={ContainerHorizontalBorder} />
      </div>
    </div>
  );
}
