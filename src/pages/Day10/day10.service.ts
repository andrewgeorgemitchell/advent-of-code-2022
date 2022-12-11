const parseOperation = (
  operation: string
): {
  op: string;
  num: number;
} => {
  const [op, num] = operation.split(" ");
  return {
    op,
    num: op === "noop" ? 0 : Number(num),
  };
};

const calculateComputerCycles = (
  input: string[]
): Array<{
  x: number;
}> => {
  let x = 1;
  const Cycles = [{ x: x }];

  for (let i = 0; i < input.length; i++) {
    const { op, num } = parseOperation(input[i]);
    Cycles.push({ x: x });

    if (op === "addx") {
      x += num;
      Cycles.push({ x: x });
      continue;
    }
  }

  return Cycles;
};

export const calculateComputerOps = (
  input: string[],
  checkpoints: number[]
): number => {
  const cycles = calculateComputerCycles(input);

  return checkpoints.reduce((acc, curr) => {
    return acc + cycles[curr - 1].x * curr;
  }, 0);
};

export const calculateScreenOutput = ({
  input,
  screenWidth = 40,
  screenHeight = 6,
}: {
  input: string[];
  screenWidth?: number;
  screenHeight?: number;
}): string[] => {
  const cycles = calculateComputerCycles(input);

  const screen: string[][] = Array.from(Array(screenHeight), () => []);

  for (let i = 0; i < screen.length; i++) {
    const screenRow = screen[i];
    for (let j = 0; j < screenWidth; j++) {
      const currentCycle = cycles[j + i * screenWidth];
      // Sprites are 3 characters wide so we need to check x +- 1
      const spritePos = [
        currentCycle.x - 1,
        currentCycle.x,
        currentCycle.x + 1,
      ];
      if (spritePos.includes(j)) {
        screenRow.push("#");
      } else {
        screenRow.push(".");
      }
    }
  }

  return screen.map((row) => row.join(""));
};
