import { describe, expect, test } from "@jest/globals";
import { sanitizeFileInput } from "~/utils";
import { calculateElfCalories } from "./day01.service";

const TestInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const Part1Output = 24000;

const Part2Output = 45000;

describe("Day01", () => {
  const input = sanitizeFileInput(TestInput);
  const { sortedElfFoodTotals } = calculateElfCalories(input);

  test("Part 1: calculate elf with highest food", () => {
    expect(sortedElfFoodTotals.at(-1)?.calories).toBe(Part1Output);
  });

  test("Part 2: calculate top 3 elf with highest food", () => {
    const top3Elves = sortedElfFoodTotals.slice(-3);
    const totalCalories = top3Elves.reduce((acc, elf) => {
      return acc + elf.calories;
    }, 0);
    expect(totalCalories).toBe(Part2Output);
  });
});
