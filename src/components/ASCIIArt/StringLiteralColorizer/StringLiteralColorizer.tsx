import { useMemo } from "react";

export interface StringLiteralColorizerProps {
  stringLiteral: string;
  colorMap: Record<string, string>;
}

export const StringLiteralColorizer = ({
  stringLiteral,
  colorMap,
}: StringLiteralColorizerProps) => {
  const colorMapKeys = Object.keys(colorMap);

  const charArrayByKeyGroups = useMemo(() => {
    const charArray = stringLiteral.split("");
    const newCharArrayByKeyGroups: string[] = [];

    charLoop: for (let i = 0; i < charArray.length; i++) {
      const char = charArray[i];
      for (let j = 0; j < colorMapKeys.length; j++) {
        const key = colorMapKeys[j];

        if (key.length === 1) {
          continue;
        }

        const keyLength = key.length;
        const currentSlice = charArray.slice(i, i + keyLength).join("");

        if (currentSlice === key) {
          i = i + keyLength - 1;
          newCharArrayByKeyGroups.push(currentSlice);
          continue charLoop;
        }
      }
      newCharArrayByKeyGroups.push(char);
    }

    return newCharArrayByKeyGroups;
  }, [stringLiteral, colorMap]);

  return (
    <div className="flex flex-col ">
      <p>
        {charArrayByKeyGroups.map((charGroup, index) => {
          if (charGroup === " ") {
            return (
              <span key={index} className="opacity-0">
                _
              </span>
            );
          }

          if (charGroup === "\n") {
            return <br key={index} />;
          }

          for (let i = 0; i < colorMapKeys.length; i++) {
            const key = colorMapKeys[i];

            if (key === charGroup) {
              return (
                <span key={index} className={colorMap[key]}>
                  {charGroup}
                </span>
              );
            }
          }
          return charGroup;
        })}
      </p>
    </div>
  );
};
