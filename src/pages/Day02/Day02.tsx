import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Beach, Typewriter } from "~/components";
import {
  calculateScoresForAllRounds,
  calculateScoresForAllRoundsUsingUltimateStrategy,
  parseInputIntoMoves,
} from "./day02.service";

export const Day02 = () => {
  const [predictedScore, setPredictedScore] = useState<number>();
  const [
    predictedScoreWhenMeetingDesiredOutcome,
    setPredictedScoreWhenMeetingDesiredOutcome,
  ] = useState<number>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const { opponentMoves, selfMoves } = parseInputIntoMoves(value);

    setPredictedScore(calculateScoresForAllRounds(opponentMoves, selfMoves));
    setPredictedScoreWhenMeetingDesiredOutcome(
      calculateScoresForAllRoundsUsingUltimateStrategy(opponentMoves, selfMoves)
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3">
          <Link className="text-right text-blue-400" to="/">
            {"<="} To Day 01
          </Link>
          <h2 className="text-center text-xl">Day 02</h2>
          <Link className="text-blue-400" to="/day-03" disabled>
            To Day 03 {"=>"} (Coming Soon)
          </Link>
        </div>
        <p className="text-center">**********</p>
        <div className="flex items-center justify-center">
          <p className="min-h-[120px] max-w-lg text-left">
            <Typewriter>
              The elves have trekked through the forest and have come upon a
              large beach where they decide to set up camp. To decide who gets
              to have their tent closest to the snacks, they decide to play a
              rock, paper, scissors tournament. The elves are very competitive,
              however you have a secret list of all the moves the other elves
              will play, which should give you an advantage.
            </Typewriter>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Beach />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-center">
          Lets figure out if your encrypted strategy guide is correct
        </p>
        <label>Paste your puzzle input into the field below:</label>
        <input className="max-w-lg" type="text" onChange={handleInputChange} />
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
      </div>
      <a
        href="https://github.com/andrewgeorgemitchell/advent-of-code-2022/blob/main/src/pages/Day02/Day02.tsx"
        className="text-center text-blue-200"
      >
        See Code for this solution on Github
      </a>
    </div>
  );
};
