import { useState } from "react";
import { Beach, Button, Screen, TextField } from "~/components";
import { DayLayout } from "~/pages";
import rawInput from "./day10.data.txt?raw";
import { calculateComputerOps, calculateScreenOutput } from "./day10.service";

export const Day10 = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [cycleSums, setCycleSums] = useState<number>();
  const [screenDisplay, setScreenDisplay] = useState<string[]>();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setInputValue(value);

    const parsedInput = value.split("\n");

    setCycleSums(
      calculateComputerOps(parsedInput, [20, 60, 100, 140, 180, 220])
    );
    setScreenDisplay(
      calculateScreenOutput({
        input: parsedInput,
      })
    );
  };

  const handleUseDefaultValue = () => {
    setInputValue(rawInput);
    const parsedInput = rawInput.split("\n");
    setCycleSums(
      calculateComputerOps(parsedInput, [20, 60, 100, 140, 180, 220])
    );
    setScreenDisplay(
      calculateScreenOutput({
        input: parsedInput,
      })
    );
  };

  return (
    <DayLayout.Root>
      <DayLayout.Header
        headerText="Day 10"
        route="/day-10"
        storyIntroText={`
        After being separated from the expedition, you find out your handheld device's screen is broken.
        You go about trying to fix it, in hopes of getting the screen to work again and being able to see
        the message on the screen.
        `}
      />
      <DayLayout.ASCIIArt>
        <Screen>
          {screenDisplay ? (
            <div className="text-lime-500">
              {screenDisplay.map((line) => (
                <p key={line} className="m-0">
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <div className="text-lime-500">
              <p className="m-0">Screen not responding...</p>
            </div>
          )}
        </Screen>
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
        {cycleSums && (
          <p className="text-center">
            Cycles sum: <span className="text-lime-500">{cycleSums}</span>
          </p>
        )}
        {screenDisplay && (
          <p className="text-center">
            Screen display after fixing your device:{" "}
            <div className="leading-none text-lime-500">
              {screenDisplay.map((line) => (
                <p key={line} className="m-0">
                  {line}
                </p>
              ))}
            </div>
          </p>
        )}
        <DayLayout.GithubLink href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day10/Day10.tsx" />
      </DayLayout.Content>
    </DayLayout.Root>
  );
};
