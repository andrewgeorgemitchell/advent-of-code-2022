export const parseTemplateLiteral = (input: TemplateStringsArray): string[] => {
  return input[0].split("\n");
};
