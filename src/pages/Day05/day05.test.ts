import { describe, expect, test } from "@jest/globals";
import {
  moveCargo,
  moveCargoWithMaxCarrySize,
  parseInput,
  parseTemplateLiteralIntoInput,
} from "./day05.service";

const Input = parseTemplateLiteralIntoInput`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const ParsedInput = parseInput(Input);

const Part1Output = "CMZ";

const Part2Output = "MCD";

describe("Day05", () => {
  test("Parser parses correctly", () => {
    expect(ParsedInput.cargo).toEqual([["Z", "N"], ["M", "C", "D"], ["P"]]);
    expect(ParsedInput.moves).toEqual([
      { move: 1, from: 2, to: 1 },
      { move: 3, from: 1, to: 3 },
      { move: 2, from: 2, to: 1 },
      { move: 1, from: 1, to: 2 },
    ]);
  });

  test("Part 1: move cargo", () => {
    expect(moveCargo(ParsedInput)).toBe(Part1Output);
  });

  test("Part 2: move cargo with advanced crane", () => {
    expect(moveCargoWithMaxCarrySize(ParsedInput)).toBe(Part2Output);
  });
});
