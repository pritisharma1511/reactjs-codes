import React, { useState, useCallback, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  // useCallback to memoize functions
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  // useMemo to memoize derived value
  const isEven = useMemo(() => {
    console.log("Checking even/odd...");
    return count % 2 === 0;
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 text-lg">
      <h1 className="text-2xl font-bold">Counter with useCallback & useMemo</h1>

      <p>
        Count: <span className="font-mono">{count}</span>
      </p>

      <p>
        The number is:{" "}
        <span className={isEven ? "text-green-600" : "text-red-600"}>
          {isEven ? "Even" : "Odd"}
        </span>
      </p>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow-md"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-xl shadow-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
