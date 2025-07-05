"use client"
import Greet from "./components/Greet";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Greet/>
      <Counter/>
      <h1 className="text-blue-400 text-3xl italic">Root Page</h1>
    </div>
  );
}
