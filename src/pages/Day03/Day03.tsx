import { useState } from "react";
import { Button, Elf, TextField } from "~/components";
import { DayLayout } from "~/pages";
import { renderXTimes, sanitizeFileInput } from "~/utils";
import {
  calculateSumPackGroups,
  calculateSumPackPriority,
} from "./day03.service";
import rawInput from "./day03.data.txt?raw";

const DefaultInputData = sanitizeFileInput(rawInput);

export const Day03 = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [packPrioritySum, setPackPrioritySum] = useState<number>();
  const [groupBadgeSum, setGroupBadgeSum] = useState<number>();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setInputValue(value);
    setPackPrioritySum(calculateSumPackPriority(value));
    setGroupBadgeSum(calculateSumPackGroups(value));
  };

  const handleUseDefaultValue = () => {
    setInputValue(DefaultInputData);
    setPackPrioritySum(calculateSumPackPriority(DefaultInputData));
    setGroupBadgeSum(calculateSumPackGroups(DefaultInputData));
  };

  return (
    <DayLayout.Root>
      <DayLayout.Header
        headerText="Day 03"
        route="/day-03"
        storyIntroText={`
          One Elf has the important job of loading all of the rucksacks with
          supplies for the jungle journey. Unfortunately, that Elf didn't quite
          follow the packing instructions, and so a few items now need to be rearranged.
          They need to sort through their rucksacks and organize their items by priority.
          Can you help them?
        `}
      />
      <DayLayout.ASCIIArt>{renderXTimes(7, <Elf />)}</DayLayout.ASCIIArt>
      <DayLayout.Content>
        <DayLayout.Input>
          <TextField
            label="Puzzle Input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button onClick={handleUseDefaultValue}>Prefill Puzzle Input</Button>
        </DayLayout.Input>
        {packPrioritySum && (
          <p className="text-center">
            The sum of all pack priorities is:{" "}
            <span className="text-lime-500">{packPrioritySum}</span>
          </p>
        )}
        {groupBadgeSum && (
          <p className="text-center">
            The sum of all group badge numbers is:{" "}
            <span className="text-lime-500">{groupBadgeSum}</span>
          </p>
        )}
        <DayLayout.GithubLink href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day03/Day03.tsx" />
      </DayLayout.Content>
    </DayLayout.Root>
  );
};
