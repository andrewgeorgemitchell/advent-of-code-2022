const AdventOfCodeStringLiteral = `
          |
          |
       \\ | /
       -- * --
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

export const AdventOfCodeLogo = () => (
  <div className="flex w-80 flex-col items-center justify-center">
    {AdventOfCodeStringLiteral.split("\n").map((line, index) => (
      <div key={index} className="text-center">
        {!line.includes("| |") ? (
          line.split("").map((char, i) => {
            switch (char) {
              case "-":
              case "|":
              case "/":
              case "\\":
                return (
                  <span key={i} className="animate-twinkle">
                    {char}
                  </span>
                );
              case "<":
              case ">":
                return (
                  <span key={i} className="text-green-700 ">
                    {char}
                  </span>
                );
              case "*":
                return (
                  <span key={i} className="animate-twinkle">
                    {char}
                  </span>
                );
              case "O":
                return (
                  <span key={i} className="text-blue-500">
                    {char}
                  </span>
                );

              case "o":
                return (
                  <span key={i} className="text-red-600">
                    {char}
                  </span>
                );

              default:
                return char;
            }
          })
        ) : (
          <span className="text-orange-900">{line}</span>
        )}
      </div>
    ))}
  </div>
);
