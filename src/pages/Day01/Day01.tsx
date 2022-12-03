import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Elf, TextField, Tree, Typewriter } from "~/components";
import { renderXTimes, sanitizeFileInput } from "~/utils";
import { calculateElfCalories } from "./day01.service";
import { ElfInventory } from "./day01.types";
import rawInput from "./day01.data.txt?raw";

const inputData = sanitizeFileInput(rawInput);
console.log("inputData:", inputData);

export const Day01 = () => {
  const [value, setValue] = useState<string>("");
  const [highestFoodElf, setHighestFoodElf] = useState<ElfInventory>();
  const [highestThreeElvesByCalories, setHighestThreeElvesByCalories] =
    useState<ElfInventory[]>([]);

  const calculateHighestFoodElves = (inputStr: string) => {
    const { sortedElfFoodTotals } = calculateElfCalories(inputStr);

    setHighestFoodElf(sortedElfFoodTotals.at(-1));

    setHighestThreeElvesByCalories(sortedElfFoodTotals.slice(-3));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    calculateHighestFoodElves(value);
  };

  const handleUseDefaultValue = () => {
    setValue(inputData);
    calculateHighestFoodElves(inputData);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2"></div>
          <h2 className="text-center text-xl">Day 01</h2>
          <Link className="text-blue-400" to="/day-02">
            To Day 02 {"=>"}
          </Link>
        </div>
        <p className="text-center">**********</p>
        <div className="flex items-center justify-center">
          <p className="min-h-[120px] max-w-lg text-left">
            <Typewriter>
              The elves come upon a thick forest. Too thick for vehicles, so as
              they prepare to go ahead on foot, they begin taking inventory of
              what food they have with them. In particular they are interested
              in how many calories each elf has. But more importantly they want
              to know who has the most food, so they know who to ask for snacks!
            </Typewriter>
          </p>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center overflow-hidden">
        {renderXTimes(8, <Elf />)}
        {renderXTimes(8, <Tree />)}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-end justify-center gap-2">
          <TextField
            label="Puzzle Input"
            value={value}
            onChange={handleInputChange}
          />
          <Button onClick={handleUseDefaultValue}>Prefill Puzzle Input</Button>
        </div>
        {highestFoodElf && (
          <p>
            Elf with the highest amount of food by calories:{" "}
            <span className="text-lime-500">{highestFoodElf?.calories}</span>
          </p>
        )}
        {highestThreeElvesByCalories.length > 0 && (
          <p>
            Top 3 Elves with the highest amount of food by calories combined:{" "}
            <span className="text-lime-500">
              {highestThreeElvesByCalories.reduce((acc, elf) => {
                return acc + elf.calories;
              }, 0)}
            </span>
          </p>
        )}
      </div>
      <a
        href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day01/Day01.tsx"
        className="text-center text-blue-200"
      >
        See Code for this solution on Github
      </a>
    </div>
  );
};
