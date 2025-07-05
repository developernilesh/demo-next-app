import { useState } from "react";

const Counter = () => {
  console.log("Inside Counter Component");
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="cursor-pointer border rounded-lg px-6 py-3"
    >
      Clicked <b>{count}</b> times
    </button>
  );
};

export default Counter;
