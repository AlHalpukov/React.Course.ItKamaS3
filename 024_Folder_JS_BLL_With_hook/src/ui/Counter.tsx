import { useEffect, useState } from "react";

// presentation layer -> UI -> Component
export default function Counter() {
  const { count, inc } = useCounter(0);

  return (
    <div style={{ fontSize: "20px", margin: "0 20px" }}>
      <h1>Counter</h1>
      <button onClick={inc}>
        <span style={{ padding: "20px" }}>{count}</span>
      </button>
    </div>
  );
}

// Business Logic Layer (bll) -> State management -> custom hook
const useCounter = (initNumber: number = 0) => {
  // business rules -> business invariants
  const [count, setCount] = useState(initNumber);

  useEffect(() => {
    setInterval(() => {
      setCount(0);
    }, 3000);
  }, []);

  return {
    count,
    inc: () => {
      setCount(count + 1);
    },
  };
};
