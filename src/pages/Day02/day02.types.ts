export enum MovesEnum {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}
export type Moves = `${MovesEnum}`;
export type Result = "win" | "lose" | "draw";
export type OpponentEncryptedMoves = "A" | "B" | "C";
export type SelfEncryptedMoves = "X" | "Y" | "Z";
