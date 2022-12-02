import { useMemo } from "react";
import { StringLiteralColorizer } from "../StringLiteralColorizer";

const ElfTemplateString = `
  *  
  /\\
^(oo)^
&-\\/-&
 _||_
`;

export const Elf = () => {
  const skinColor = useMemo(() => {
    const skinColors = [
      "text-white",
      "text-yellow-300",
      "text-yellow-400",
      "text-yellow-500",
      "text-yellow-600",
      "text-yellow-700",
      "text-green-300",
    ];
    return skinColors[Math.floor(Math.random() * skinColors.length)];
  }, []);

  return (
    <StringLiteralColorizer
      stringLiteral={ElfTemplateString}
      colorMap={{
        "*": "text-white",
        "/\\": "text-green-700",
        "\\/": "text-red-700",
        "^(": skinColor,
        ")^": skinColor,
        "&-": skinColor,
        "-&": skinColor,
        "||": "text-red-700",
        _: "text-yellow-900",
      }}
    />
  );
};
