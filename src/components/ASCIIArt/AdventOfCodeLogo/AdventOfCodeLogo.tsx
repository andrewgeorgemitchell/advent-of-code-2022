import { StringLiteralColorizer } from "~/components";

const AdventOfCodeStringLiteral = `
          |
       \\  |  /
        \\ | /
      --- * ---
         >O<
        >o<<<
       >*>>O<<
      >o>>*>>o<
     >*>>O>>>>o<
    >O>>>>>o>>*<<
   >*>>O>>>>>o>>O<
  >O>>>>>o>>*>>*>>o<
 >*>>o>>>>>O>>*>*>>O<
         | |
`;

const AdventOfCodeColorMap = {
  "-": "animate-twinkle",
  "*": "animate-twinkle",
  "|": "animate-twinkle",
  "\\": "animate-twinkle",
  "/": "animate-twinkle",
  ">": "text-green-700",
  "<": "text-green-700",
  O: "text-blue-500",
  o: "text-red-600",
  "| |": "text-orange-900",
};

export const AdventOfCodeLogo = () => (
  <StringLiteralColorizer
    stringLiteral={AdventOfCodeStringLiteral}
    colorMap={AdventOfCodeColorMap}
  />
);
