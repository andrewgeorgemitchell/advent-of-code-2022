import { describe, expect, test } from "@jest/globals";
import { sanitizeFileInput } from "../../utils";
import {
  calculateScoresForAllRounds,
  calculateScoresForAllRoundsUsingUltimateStrategy,
  parseInputIntoMoves,
} from "./day02.service";

const RawTestInput = `A Y
B X
C Z`;

const TestInput = sanitizeFileInput(RawTestInput);

const Part1Output = 15;

const Part2Output = 12;

describe("Day02", () => {
  const { opponentMoves, selfMoves } = parseInputIntoMoves(TestInput);

  test("Part 1: Calculate predicted score with basic strategy", () => {
    expect(calculateScoresForAllRounds(opponentMoves, selfMoves)).toBe(
      Part1Output
    );
  });

  test("Part 2: Calculate predicted score with advanced strategy", () => {
    expect(
      calculateScoresForAllRoundsUsingUltimateStrategy(opponentMoves, selfMoves)
    ).toBe(Part2Output);
  });
});
