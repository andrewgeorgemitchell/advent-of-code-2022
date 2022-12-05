import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Beach, Button, TextField, Typewriter } from "~/components";
import {
  calculateScoresForAllRounds,
  calculateScoresForAllRoundsUsingUltimateStrategy,
  parseInputIntoMoves,
} from "./day02.service";
import RawData from "./day02.data.txt?raw";
import { sanitizeFileInput } from "~/utils";
import { DayLayout } from "../layout";

const DefaultInputData = sanitizeFileInput(RawData);

const Day02IntroText = `
The elves have trekked through the forest and have come upon a
              large beach where they decide to set up camp. To decide who gets
              to have their tent closest to the snacks, they decide to play a
              rock, paper, scissors tournament. The elves are very competitive,
              however you have a secret list of all the moves the other elves
              will play, which should give you an advantage.`;

export const Day02 = () => {
  const [predictedScore, setPredictedScore] = useState<number>();
  const [
    predictedScoreWhenMeetingDesiredOutcome,
    setPredictedScoreWhenMeetingDesiredOutcome,
  ] = useState<number>();

  const [inputValue, setInputValue] = useState<string>();

  const calculateScores = (value: string) => {
    const { opponentMoves, selfMoves } = parseInputIntoMoves(value);

    setPredictedScore(calculateScoresForAllRounds(opponentMoves, selfMoves));
    setPredictedScoreWhenMeetingDesiredOutcome(
      calculateScoresForAllRoundsUsingUltimateStrategy(opponentMoves, selfMoves)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    calculateScores(value);
  };

  const handleUseDefaultValue = () => {
    setInputValue(DefaultInputData);
    calculateScores(DefaultInputData);
  };

  return (
    <DayLayout.Root>
      <DayLayout.Header
        route="/day-02"
        headerText="Day 02"
        storyIntroText="The elves have trekked through the forest and have come upon a
        large beach where they decide to set up camp. To decide who gets
        to have their tent closest to the snacks, they decide to play a
        rock, paper, scissors tournament. The elves are very competitive,
        however you have a secret list of all the moves the other elves
        will play, which should give you an advantage."
      />

      <DayLayout.ASCIIArt>
        <Beach />
      </DayLayout.ASCIIArt>
      <DayLayout.Content>
        <p className="text-center">
          Lets figure out if your encrypted strategy guide is correct
        </p>
        <DayLayout.Input>
          <TextField
            label="Puzzle Input"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button onClick={handleUseDefaultValue}>Prefill Puzzle Input</Button>
        </DayLayout.Input>
        {predictedScore && (
          <p className="text-center">
            Your initial (but wrong) predicted score is:{" "}
            <b className="text-lime-500">{predictedScore}</b>
          </p>
        )}
        {predictedScoreWhenMeetingDesiredOutcome && (
          <p className="max-w-lg text-center">
            The elf who gave you the list of all the moves told you that you
            were decrypting their list wrong, after using the correct formula
            your predicted score using the ultimate strategy is:{" "}
            <b className="text-lime-500">
              {predictedScoreWhenMeetingDesiredOutcome}
            </b>
          </p>
        )}
      </DayLayout.Content>
      <DayLayout.GithubLink href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day02/Day02.tsx" />
    </DayLayout.Root>
  );
};
