import { describe, expect, test } from "@jest/globals";
import { sanitizeFileInput } from "~/utils";
import { calculateTotalGroupsWithDuplicateCleaningAreas } from "./day04.service";

const RawTestInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const TestInput = sanitizeFileInput(RawTestInput);

const Part1Output = 2;

const Part2Output = 4;

describe("Day04", () => {
  test("Part 1: Total num of full duplicate cleaning areas", () => {
    expect(calculateTotalGroupsWithDuplicateCleaningAreas(TestInput)).toBe(
      Part1Output
    );
  });

  test("Part 2: Total num of partial duplicate cleaning areas", () => {
    expect(
      calculateTotalGroupsWithDuplicateCleaningAreas(TestInput, "partial")
    ).toBe(Part2Output);
  });
});
