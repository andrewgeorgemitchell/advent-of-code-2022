import { AdventOfCodeLogo } from "~/components";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-900 text-white">
      <nav className="flex w-screen flex-col items-center justify-center p-4">
        <h1>Advent of Code 2022</h1>
        <AdventOfCodeLogo />
      </nav>
    </div>
  );
}

export default App;
