import { deepCopy } from "~/utils";
import { CargoMoves } from "./day05.types";

export const parseTemplateLiteralIntoInput = (
  input: TemplateStringsArray
): string[] => {
  return input[0].split("\n");
};

export const parseInput = (lines: string[]): CargoMoves => {
  const split = lines.indexOf("");

  // Parse Cargo Lines
  const cargoLines = lines.slice(0, split);

  const cargo = Array.from(cargoLines.pop()!.replaceAll(" ", "").split("")).map(
    (_, i) =>
      cargoLines
        .map((line) => {
          return line.slice(i * 4, i * 4 + 3).trim();
        })
        .map((c) => c.replace("[", "").replace("]", ""))
        .filter((c) => c !== "")
        .reverse()
  );

  // Parse Moves Lines
  const movesLines = lines.slice(split + 1);

  const moves = movesLines.map((line) => {
    const [_1, move, _2, from, _3, to] = line.split(" ");
    return {
      move: parseInt(move),
      from: parseInt(from),
      to: parseInt(to),
    };
  });

  return {
    cargo,
    moves,
  };
};

export const moveCargo = (cargoMoves: CargoMoves, maxCarrySize = 1): string => {
  const { cargo, moves } = cargoMoves;
  const cargoCopy = deepCopy(cargo);

  moves.forEach(({ move, from, to }) => {
    for (let i = 0; i < move; i++) {
      const cargoToMove = cargoCopy[from - 1].slice(-maxCarrySize);
      cargoCopy[from - 1].splice(-maxCarrySize, maxCarrySize);
      if (cargoToMove) {
        cargoCopy[to - 1].push(...cargoToMove);
      }
    }
  });

  return cargoCopy.map((c) => c.pop()).join("");
};

export const moveCargoWithMaxCarrySize = (cargoMoves: CargoMoves): string => {
  const { cargo, moves } = cargoMoves;
  const cargoCopy = deepCopy(cargo);
  moves.forEach(({ move, from, to }) => {
    const cargoToMove = cargoCopy[from - 1].slice(-move);
    cargoCopy[from - 1].splice(-move, move);
    if (cargoToMove) {
      cargoCopy[to - 1] = [...cargoCopy[to - 1], ...cargoToMove];
    }
  });

  return cargoCopy.map((c) => c.pop()).join("");
};
