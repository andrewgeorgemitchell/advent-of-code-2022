import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Elf, Tree, Typewriter } from "~/components";
import { renderXTimes } from "~/utils";

type ElfInventory = {
  id: number;
  calories: number;
};

export const Day01 = () => {
  const [highestFoodElf, setHighestFoodElf] = useState<ElfInventory>();
  const [highestThreeElvesByCalories, setHighestThreeElvesByCalories] =
    useState<ElfInventory[]>([]);

  // Day 01 Logic
  const calculateElfCalories = (inputStr: string) => {
    const elvesFoodTotals = inputStr
      .split("  ")
      .map<ElfInventory>((elfFood, i) => {
        return {
          id: i + 1,
          calories: elfFood.split(" ").reduce((acc, food) => {
            return acc + parseInt(food);
          }, 0),
        };
      });

    const elvesFoodTotalsSorted = elvesFoodTotals.sort((a, b) => {
      return a.calories - b.calories;
    });

    setHighestFoodElf(elvesFoodTotalsSorted[elvesFoodTotalsSorted.length - 1]);

    setHighestThreeElvesByCalories(elvesFoodTotalsSorted.slice(-3));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    calculateElfCalories(value);
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
      <div className="flex flex-nowrap justify-center">
        <div className="grid grid-cols-4 grid-rows-2">
          {renderXTimes(3, <Elf />)}
          <Tree />
          {renderXTimes(3, <Elf />)}
          <Tree />
        </div>
        <div className="grid grid-cols-4 grid-rows-2">
          {renderXTimes(8, <Tree />)}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <label>Paste your puzzle input into the field below:</label>
        <input className="max-w-lg" type="text" onChange={handleInputChange} />
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
