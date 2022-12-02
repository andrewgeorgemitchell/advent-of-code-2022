import { AdventOfCodeLogo, Elf, SnowFall, Tree } from "~/components";
import { Outlet, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { router } from "./App.router";

export const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="h-screen w-screen overflow-x-hidden bg-slate-900 pb-10 text-white">
        <nav className="relative flex w-screen flex-col items-center justify-center p-4">
          <h1 className="absolute top-2 text-center">Advent of Code 2022</h1>
          <div className="relative flex flex-row flex-nowrap items-end justify-center gap-2 overflow-hidden pt-12">
            <SnowFall />
            <Elf />
            <Tree />
            <Elf />
            <Elf />
            <Elf />
            <Tree />
            <Elf />
            <Elf />
            <AdventOfCodeLogo />
            <Elf />
            <Tree />
            <Tree />
            <Elf />
            <Elf />
            <Tree />
            <Tree />
            <Elf />
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </RouterProvider>
  );
};
