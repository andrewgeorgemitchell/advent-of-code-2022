import { ElfInventory } from "./day01.types";

export const calculateElfCalories = (inputStr: string) => {
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

  return {
    sortedElfFoodTotals: elvesFoodTotalsSorted,
  };
};
