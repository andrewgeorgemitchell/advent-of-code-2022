import { describe, expect, test } from "@jest/globals";
import { sum } from "./day02.service";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
