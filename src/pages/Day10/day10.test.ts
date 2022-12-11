import { describe, expect, test } from "@jest/globals";
import { parseTemplateLiteral } from "~/utils";
import { calculateComputerOps, calculateScreenOutput } from "./day10.service";
import fs from "fs";

const RawFileInput = fs.readFileSync(__dirname + "/day10.data.txt", "utf8");

const TestInput = parseTemplateLiteral`addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;

const Part1TestOutput = 13140;

const Part1ActualOutput = 14160;

const Part2TestOutput = parseTemplateLiteral`##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....`;

const Part2ActualOutput = [
  "###....##.####.###..###..####.####..##..",
  "#..#....#.#....#..#.#..#.#....#....#..#.",
  "#..#....#.###..#..#.#..#.###..###..#....",
  "###.....#.#....###..###..#....#....#....",
  "#.#..#..#.#....#.#..#....#....#....#..#.",
  "#..#..##..####.#..#.#....####.#.....##..",
];

describe("Day10", () => {
  const PuzzleInput = RawFileInput.split("\n");

  test("Part 1: TestInput", () => {
    expect(calculateComputerOps(TestInput, [20, 60, 100, 140, 180, 220])).toBe(
      Part1TestOutput
    );
  });

  test("Part 1: PuzzleInput", () => {
    expect(
      calculateComputerOps(PuzzleInput, [20, 60, 100, 140, 180, 220])
    ).toBe(Part1ActualOutput);
  });

  test("Part 2: TestInput", () => {
    expect(
      calculateScreenOutput({
        input: TestInput,
      })
    ).toStrictEqual(Part2TestOutput);
  });

  test("Part 2: PuzzleInput", () => {
    expect(
      calculateScreenOutput({
        input: PuzzleInput,
      })
    ).toStrictEqual(Part2ActualOutput);
  });
});
