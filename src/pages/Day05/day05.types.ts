export type CargoMoves = {
  cargo: Array<string[]>;
  moves: Array<{
    move: number;
    from: number;
    to: number;
  }>;
};
