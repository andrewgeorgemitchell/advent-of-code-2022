import { Elf, Tree } from "~/components";

export const Day01 = () => {
  return (
    <div>
      <Elf />
      <Elf />
      <Elf />
      <Elf />
      <Elf />
      <Elf />
      <Elf />
      <Elf />
      <Elf />
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
        <Tree />
      </div>
    </div>
  );
};
