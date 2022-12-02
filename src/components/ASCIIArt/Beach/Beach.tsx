import { StringLiteralColorizer } from "~/components";

const BeachStringLiteral = `
                ^^^^^^^   ^^^^^^    ^^^^^^^   ^^^^^^   ^^^^^   ^^^^^   ^^^^^^^   ^^^^^^    ^^^^^   ^^^^^^^   ^^^^^^^
            ^  ^^^^^^^^^ ^^^^^^^^  ^^^^^^^^^ ^^^^^^^^ ^^^^^^^ ^^^^^^^ ^^^^^^^^^ ^^^^^^^^^ ^^^^^^^ ^^^^^^^^^ ^^^^^^^^^  ^
           ^^^  v ||| vvvv ||| vvvvvvv || vvvv ||| vvvv ||| vvv  ||| vvvv |||  vvv ||| vvv  ||| vvvv ||| vvvvv ||     ^^^ 
          ^^^^^  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  ^^^^^     
         ^^^^^^^  vvvvvvvvvvvvvvvvv/8\\vvvvvvvvv[[][][]vvvvvvvvvvvvvvvvvvvvv/8\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv ^^^^^^^    
        ^^^^^^^^^  vvv/8\\vvvvvvvvv/| |\\vvvvvvvv[]$$$[]vvvvvvvv/8\\vvvvvvvvv/| |\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv ^^^^^^^^^
         ^ ||| ^  vvv/| |\\vvvvvvv/8| |8\\vvvvvvv[]$$$[]vvvvvvv/| |\\vvvvvvv/8| |8\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv ^    ||^^    
        ^^^   ^^^  v/8| |8\\vv/8\\vvvvvvvvvvvvvvv[][][]]vvvvvv/8| |8\\vvv/8\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv ^^^    ^^^^  
       ^^^^^ ^^^^^  vvvvvvvv/| |\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv/| |\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv ^^^^^  ^^^^^^
      ^^^^^^^^^^^^^ vvvvvvv/8| |8\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv/8| |8\\vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv ^^^^^^^^^^^^^^^
         ||    ||   vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  ||     ||   
~~~ ~~ ~~~ ~~~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~
~~~ ~~ ~~~ ~~~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~~~ ~~ ~
~ ~ ~~ ~~~ ~~ ~ ~~ ~~ ~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ 
`;

const BeachColorMap = {
  "^": "text-green-700",
  "|||": "text-orange-900",
  "||": "text-orange-900",
  "~": "animate-water",
  v: "text-yellow-100 opacity-40",
  "/": "text-red-500",
  "\\": "text-red-500",
  _: "text-red-500",
  "8": "text-red-500",
  "|": "text-red-500",
  "[": "text-slate-400",
  "]": "text-slate-400",
  $: "animate-fire",
};

export const Beach = () => (
  <StringLiteralColorizer
    stringLiteral={BeachStringLiteral}
    colorMap={BeachColorMap}
  />
);
