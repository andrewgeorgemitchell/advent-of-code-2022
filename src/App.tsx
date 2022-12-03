import { AdventOfCodeLogo, Elf, SnowFall, Tree } from "~/components";
import { Outlet, RouterProvider } from "@tanstack/react-router";
import "./App.css";
import { router } from "./App.router";

export const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="h-screen w-screen overflow-x-hidden bg-slate-900 pb-10 text-white">
        <nav className="relative flex w-screen flex-col items-center justify-center">
          <h1 className="absolute top-2 text-center">Advent of Code 2022</h1>
          <div className="relative flex flex-row flex-nowrap items-end justify-center gap-2 overflow-hidden pt-12">
            <Elf />
            <Elf />
            <Elf />
            <Tree />
            <Tree />
            <Elf />
            <AdventOfCodeLogo />
            <Elf />
            <Elf />
            <Elf />
            <Tree />
            <Tree />
            <Elf />
            <SnowFall />
          </div>
        </nav>
        <main className="mt-4 p-2">
          <Outlet />
        </main>
      </div>
    </RouterProvider>
  );
};
