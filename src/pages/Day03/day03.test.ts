import { describe, expect, test } from "@jest/globals";
import { sanitizeFileInput } from "../../utils";
import {
  calculateSumPackGroups,
  calculateSumPackPriority,
} from "./day03.service";

const RawTestInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const TestInput = sanitizeFileInput(RawTestInput);

const Part1Output = 157;

const Part2Output = 70;

describe("Day02", () => {
  test("Part 1: Sum of rucksack", () => {
    expect(calculateSumPackPriority(TestInput)).toBe(Part1Output);
  });

  test("Part 2: Sum of rucksack groups", () => {
    expect(calculateSumPackGroups(TestInput)).toBe(Part2Output);
  });
});
