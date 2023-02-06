import { useEffect, useState } from "react";

export function useMockFixture() {
  const fixtures = [fixture1, fixture2, fixture3, fixture4];

  const [fixture, setFixture] = useState({ index: 0, value: fixtures[0] });

  useEffect(() => {
    const int = setInterval(() => {
      setFixture((o) => ({
        index: o.index + 1,
        value: fixtures[(o.index + 1) % fixtures.length],
      }));
    }, 2000);

    return () => clearInterval(int);
  }, []);

  return fixture.value;
}

export enum POINTS {
  ZERO = "0",
  FIFTEEN = "15",
  THIRTY = "30",
  FORTY = "40",
  ADVANTAGE = "AD",
}

export type Fixture = {
  firstPlayerId: number;
  secondPlayerId: number;
  servingPlayerId: number;
  sets: Array<{
    winnerPlayerId?: number;
    setNumber: number;
    tiebreaker: {
      isTieBreaker: boolean;
      firstPlayerTiebreakerPoints: number;
      secondPlayerTiebreakerPoints: number;
    };
    games: Array<{
      winnerPlayerId?: number;
      advantagePlayerId?: number;
      firstPlayerPoints: POINTS;
      secondPlayerPoints: POINTS;
    }>;
  }>;
};

const fixture1: Fixture = {
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.THIRTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.FIFTEEN,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.THIRTY,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.THIRTY,
        },
      ],
    },
  ],
};

const fixture2: Fixture = {
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.THIRTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.FIFTEEN,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.THIRTY,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.FORTY,
        },
      ],
    },
  ],
};

const fixture3: Fixture = {
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.THIRTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.FIFTEEN,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.THIRTY,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.FORTY,
        },
      ],
    },
  ],
};

const fixture4: Fixture = {
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.FIFTEEN,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.THIRTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.FIFTEEN,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.THIRTY,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 0,
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
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
          firstPlayerPoints: POINTS.FORTY,
          secondPlayerPoints: POINTS.ZERO,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          winnerPlayerId: 1,
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.FORTY,
        },
        {
          firstPlayerPoints: POINTS.ZERO,
          secondPlayerPoints: POINTS.ZERO,
        },
      ],
    },
  ],
};
