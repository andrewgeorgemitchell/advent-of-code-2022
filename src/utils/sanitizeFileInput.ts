export const sanitizeFileInput = (inputStr: string) => {
  return inputStr.replaceAll("\n", " ");
};
