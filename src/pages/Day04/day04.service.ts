const convertNumberRangeToArray = (num1: number, num2: number): number[] => {
  const range = [];
  for (let i = num1; i <= num2; i++) {
    range.push(i);
  }
  return range;
};

const parseInput = (
  input: string
): Array<{
  elf1: number[];
  elf2: number[];
}> => {
  return input.split(" ").map((row) => {
    const [elf1, elf2] = row.split(",");

    const [elf1Num1, elf1Num2] = elf1.split("-").map(Number);
    const [elf2Num1, elf2Num2] = elf2.split("-").map(Number);
    return {
      elf1: convertNumberRangeToArray(elf1Num1, elf1Num2),
      elf2: convertNumberRangeToArray(elf2Num1, elf2Num2),
    };
  });
};

export const calculateTotalGroupsWithDuplicateCleaningAreas = (
  input: string,
  duplicationLvl: "full" | "partial" = "full"
): number => {
  const parsedInput = parseInput(input);

  const totalDuplicateGroups = parsedInput.filter(({ elf1, elf2 }) =>
    duplicationLvl === "full"
      ? elf1.every((num) => elf2.includes(num)) ||
        elf2.every((num) => elf1.includes(num))
      : elf1.some((num) => elf2.includes(num)) ||
        elf2.some((num) => elf1.includes(num))
  );

  return totalDuplicateGroups.length;
};
