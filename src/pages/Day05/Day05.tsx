import { useState } from "react";
import { Beach, Button, TextField } from "~/components";
import { DayLayout } from "~/pages";
import rawInput from "./day05.data.txt?raw";
import {
  moveCargo,
  moveCargoWithMaxCarrySize,
  parseInput,
} from "./day05.service";

export const Day05 = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [moveCargoResult, setMoveCargoResult] = useState<string>();
  const [moveCargoBulkResult, setMoveCargoBulkResult] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const parsedInput = parseInput(value.split("\n"));

    setInputValue(value);
    setMoveCargoResult(moveCargo(parsedInput));
    setMoveCargoBulkResult(moveCargoWithMaxCarrySize(parsedInput));
  };

  const handleUseDefaultValue = () => {
    setInputValue(rawInput);
    const parsedInput = parseInput(rawInput.split("\n"));
    setMoveCargoResult(moveCargo(parsedInput));
    setMoveCargoBulkResult(moveCargoWithMaxCarrySize(parsedInput));
  };

  return (
    <DayLayout.Root>
      <DayLayout.Header
        headerText="Day 05"
        route="/day-05"
        storyIntroText={`
        The Elves need to unload some of the cargo from the ships. The cargo
        is loaded into the ships by a crane, and then the ship is moved to
        the correct location. The crane can only carry so much cargo, and so
        it must be unloaded in a series of steps. The steps are numbered, 
        and each move has been pre-planned.
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
        {moveCargoResult && (
          <p className="text-center">
            Cargo After Moves:{" "}
            <span className="text-lime-500">{moveCargoResult}</span>
          </p>
        )}
        {moveCargoBulkResult && (
          <p className="text-center">
            Partial Duplicate Assignments:{" "}
            <span className="text-lime-500">{moveCargoBulkResult}</span>
          </p>
        )}
        <DayLayout.GithubLink href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day05/Day05.tsx" />
      </DayLayout.Content>
    </DayLayout.Root>
  );
};
