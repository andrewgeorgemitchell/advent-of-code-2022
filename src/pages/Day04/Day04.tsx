import { useState } from "react";
import { Beach, Button, TextField } from "~/components";
import { DayLayout } from "~/pages";
import { sanitizeFileInput } from "~/utils";
import rawInput from "./day04.data.txt?raw";
import { calculateTotalGroupsWithDuplicateCleaningAreas } from "./day04.service";

const DefaultInputData = sanitizeFileInput(rawInput);

export const Day04 = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [fullDuplicateCleaningAreas, setFullDuplicateCleaningAreas] =
    useState<number>();
  const [partialDuplicateCleaningAreas, setPartialDuplicateCleaningAreas] =
    useState<number>();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setInputValue(value);
    setFullDuplicateCleaningAreas(
      calculateTotalGroupsWithDuplicateCleaningAreas(value)
    );
    setPartialDuplicateCleaningAreas(
      calculateTotalGroupsWithDuplicateCleaningAreas(value, "partial")
    );
  };

  const handleUseDefaultValue = () => {
    setInputValue(DefaultInputData);
    setFullDuplicateCleaningAreas(
      calculateTotalGroupsWithDuplicateCleaningAreas(DefaultInputData)
    );
    setPartialDuplicateCleaningAreas(
      calculateTotalGroupsWithDuplicateCleaningAreas(
        DefaultInputData,
        "partial"
      )
    );
  };

  return (
    <DayLayout.Root>
      <DayLayout.Header
        headerText="Day 04"
        route="/day-04"
        storyIntroText={`
        Space needs to be cleared before the last supplies can be unloaded
        from the ships, and so several Elves have been assigned the job of
        cleaning up sections of the camp. However the Elves have noticed that
        some of them have been assigned to the same section of the camp, and
        so they want to know how many sections of the camp have been assigned
        to more than one Elf.
        `}
      />
      <DayLayout.ASCIIArt>
        <Beach />
      </DayLayout.ASCIIArt>
      <DayLayout.Content>
        <DayLayout.Input>
          <TextField
            label="Puzzle Input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button onClick={handleUseDefaultValue}>Prefill Puzzle Input</Button>
        </DayLayout.Input>
        {fullDuplicateCleaningAreas && (
          <p className="text-center">
            Full Duplicate Assignments:{" "}
            <span className="text-lime-500">{fullDuplicateCleaningAreas}</span>
          </p>
        )}
        {partialDuplicateCleaningAreas && (
          <p className="text-center">
            Partial Duplicate Assignments:{" "}
            <span className="text-lime-500">
              {partialDuplicateCleaningAreas}
            </span>
          </p>
        )}
        <DayLayout.GithubLink href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day04/Day04.tsx" />
      </DayLayout.Content>
    </DayLayout.Root>
  );
};
