import { Pack } from "./day03.types";

const LowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const UppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LowercaseOffset = 96; // 'a'.charCodeAt() - 96 === 1
const UppercaseOffset = 38; // 'A'.charCodeAt() - 38 === 27

const convertLetterToPriority = (letter: string): number => {
  if (LowercaseAlphabet.includes(letter)) {
    return letter.charCodeAt(0) - LowercaseOffset;
  } else if (UppercaseAlphabet.includes(letter)) {
    return letter.charCodeAt(0) - UppercaseOffset;
  } else {
    throw new Error(`Invalid letter: ${letter}`);
  }
};

const calculateCharFrequency = (input: string): Record<string, number> => {
  return input.split("").reduce((acc, char) => {
    acc[char] = acc[char] || 0;
    acc[char] += 1;
    return acc;
  }, {} as Record<string, number>);
};

// #region Part 1

const parsePackContents = (rawPackContents: string[]): Pack[] => {
  return rawPackContents.map((rawPackContent) => {
    // Split the raw pack contents into compartments by half the length of the string
    const compartment1 = rawPackContent.slice(0, rawPackContent.length / 2);
    const compartment2 = rawPackContent.slice(rawPackContent.length / 2);

    // Calculate the frequency of each character in each compartment
    const compartment1Frequency = calculateCharFrequency(compartment1);
    const compartment2Frequency = calculateCharFrequency(compartment2);

    // Find the characters that are shared between the two compartments
    const sharedItems = Object.keys(compartment1Frequency).filter((char) => {
      return compartment2Frequency[char] > 0;
    });

    return {
      compartment1: {
        rawPackContents: compartment1,
        countedInventory: compartment1Frequency,
      },
      compartment2: {
        rawPackContents: compartment2,
        countedInventory: compartment2Frequency,
      },
      sharedItems: sharedItems,
    };
  });
};

export const calculateSumPackPriority = (inputStr: string): number => {
  const rawPackContents = inputStr.split(" ");
  const packs = parsePackContents(rawPackContents);

  return packs.reduce((acc, pack) => {
    // Calculate the priority of each item in the shared items
    const sharedItemPriorities = pack.sharedItems.map((item) => {
      return convertLetterToPriority(item);
    });

    // Sum the priority of each item in the shared items
    const sharedItemPrioritySum = sharedItemPriorities.reduce(
      (acc, priority) => {
        return acc + priority;
      },
      0
    );

    // Add the sum of the shared item priorities to the accumulator
    return acc + sharedItemPrioritySum;
  }, 0);
};

// #endregion

// #region Part 2

const findSharedItems = (packs: string[]): string[] => {
  const groupBadges = [];

  for (let i = 0; i < packs.length; i += 3) {
    const groupPacks = packs
      .slice(i, i + 3)
      .map((pack) => calculateCharFrequency(pack));

    const sharedItems = Object.keys(groupPacks[0]).filter((char) => {
      return groupPacks[1][char] > 0 && groupPacks[2][char] > 0;
    });

    if (sharedItems.length > 1) {
      throw new Error("More than one shared item found");
    }

    groupBadges.push(sharedItems[0]);
  }

  return groupBadges;
};

export const calculateSumPackGroups = (inputStr: string): number => {
  const rawPackContents = inputStr.split(" ");
  const groupBadges = findSharedItems(rawPackContents);

  return groupBadges.reduce((acc, badge) => {
    return acc + convertLetterToPriority(badge);
  }, 0);
};

// #endregion
