import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button, Elf, TextField, Tree, Typewriter } from "~/components";
import { renderXTimes, sanitizeFileInput } from "~/utils";
import { calculateElfCalories } from "./day01.service";
import { ElfInventory } from "./day01.types";
import rawInput from "./day01.data.txt?raw";
import { DayLayout } from "../layout";

const inputData = sanitizeFileInput(rawInput);

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
    <DayLayout.Root>
      <DayLayout.Header
        route="/"
        headerText="Day 01"
        storyIntroText={`
        The elves come upon a thick forest. Too thick for vehicles, so as
        they prepare to go ahead on foot, they begin taking inventory of
        what food they have with them. In particular they are interested
        in how many calories each elf has. But more importantly they want
        to know who has the most food, so they know who to ask for snacks!
        `}
      />
      <DayLayout.ASCIIArt>
        {renderXTimes(8, <Elf />)}
        {renderXTimes(8, <Tree />)}
      </DayLayout.ASCIIArt>
      <DayLayout.Content>
        <DayLayout.Input>
          <TextField
            label="Puzzle Input"
            value={value}
            onChange={handleInputChange}
          />
          <Button onClick={handleUseDefaultValue}>Prefill Puzzle Input</Button>
        </DayLayout.Input>
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
      </DayLayout.Content>
      <DayLayout.GithubLink href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day01/Day01.tsx" />
    </DayLayout.Root>
  );
};
