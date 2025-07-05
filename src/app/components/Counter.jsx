import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

const Counter = () => {
  const {isLoaded, userId, sessionId, getToken} = useAuth()
  // const { isLoaded, isSignedIn } = useUser();

  const [count, setCount] = useState(0);

  if(!isLoaded || !userId) return null;
  // if (!isLoaded || !isSignedIn) return null;

  console.log("Inside Counter Component");
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
