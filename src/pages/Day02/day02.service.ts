import {
  Moves,
  OpponentEncryptedMoves,
  Result,
  SelfEncryptedMoves,
} from "./day02.types";

const Scoring: Record<Moves | Result, number> = {
  win: 6,
  draw: 3,
  lose: 0,
  rock: 1,
  paper: 2,
  scissors: 3,
} as const;

const OpponentMovesKey: Record<OpponentEncryptedMoves, Moves> = {
  A: "rock",
  B: "paper",
  C: "scissors",
} as const;

const SelfMovesKey: Record<SelfEncryptedMoves, Moves> = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
} as const;

const SelfDesiredOutcomes: Record<SelfEncryptedMoves, Result> = {
  X: "lose",
  Y: "draw",
  Z: "win",
} as const;

const MovesHierarchy: Record<Moves, Moves> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
} as const;

const calculateWinLoseDraw = (opponentMove: Moves, selfMove: Moves): Result => {
  if (MovesHierarchy[opponentMove] === selfMove) {
    return "lose";
  }

  if (MovesHierarchy[selfMove] === opponentMove) {
    return "win";
  }

  return "draw";
};

const calculateRoundScore = (
  opponentMove: OpponentEncryptedMoves,
  selfMove: SelfEncryptedMoves
): number => {
  const opponentMoveDecrypted = OpponentMovesKey[opponentMove];
  const selfMoveDecrypted = SelfMovesKey[selfMove];
  const result = calculateWinLoseDraw(opponentMoveDecrypted, selfMoveDecrypted);
  return Scoring[result] + Scoring[selfMoveDecrypted];
};

const calculateHowToGetDesiredOutcome = (
  opponentMove: Moves,
  desiredOutcome: Result
): Moves => {
  if (desiredOutcome === "draw") {
    return opponentMove;
  }

  if (desiredOutcome === "lose") {
    return MovesHierarchy[opponentMove];
  }

  return MovesHierarchy[MovesHierarchy[opponentMove]];
};

const calculateRoundScoreWhenMeetingDesiredOutcome = (
  opponentMove: OpponentEncryptedMoves,
  encryptedOutcome: SelfEncryptedMoves
): number => {
  const opponentMoveDecrypted = OpponentMovesKey[opponentMove];
  const desiredOutcome = SelfDesiredOutcomes[encryptedOutcome];
  const move = calculateHowToGetDesiredOutcome(
    opponentMoveDecrypted,
    desiredOutcome
  );
  return Scoring[move] + Scoring[desiredOutcome];
};

export const parseInputIntoMoves = (
  input: string
): {
  opponentMoves: OpponentEncryptedMoves[];
  selfMoves: SelfEncryptedMoves[];
} => {
  const values = input.split(" ");

  const opponentMoves = values.filter(
    (_, i) => i % 2 === 0
  ) as OpponentEncryptedMoves[];
  const selfMoves = values.filter(
    (_, i) => i % 2 === 1
  ) as SelfEncryptedMoves[];

  return { opponentMoves, selfMoves };
};

export const calculateScoresForAllRounds = (
  opponentMoves: OpponentEncryptedMoves[],
  selfMoves: SelfEncryptedMoves[]
) => {
  return opponentMoves.reduce((acc, opponentMove, i) => {
    return acc + calculateRoundScore(opponentMove, selfMoves[i]);
  }, 0);
};

export const calculateScoresForAllRoundsUsingUltimateStrategy = (
  opponentMoves: OpponentEncryptedMoves[],
  selfMoves: SelfEncryptedMoves[]
) => {
  return opponentMoves.reduce((acc, opponentMove, i) => {
    return (
      acc +
      calculateRoundScoreWhenMeetingDesiredOutcome(opponentMove, selfMoves[i])
    );
  }, 0);
};
