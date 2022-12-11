import { StringLiteralColorizer } from "../StringLiteralColorizer";

const ScreenStringLiteral = `
----------------------------------------------
| ------------------------------------------ |
| |                                        | |
| |                                        | |
| |                                        | |
| |                                        | |
| |                                        | |
| |                                        | |
| ------------------------------------------ |
----------------------------------------------
`;

export const Screen = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <StringLiteralColorizer
      stringLiteral={ScreenStringLiteral}
      colorMap={{
        "-": "text-white",
        "|": "text-white",
      }}
    />
    <div className="absolute top-[72px] left-[32px] leading-none">
      {children}
    </div>
  </div>
);
