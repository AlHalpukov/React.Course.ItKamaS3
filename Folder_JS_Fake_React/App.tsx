import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Counter />
      <Age />
    </>
  );
}

const useCounter = (initValue: number, ms: number) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setInterval(() => {
      setValue(initValue);
    }, ms);
  }, []);
  return {
    value,
    inc: () => {
      setValue(value + 1);
    },
  };
};

const Counter = () => {
  const { value, inc } = useCounter(0, 3000);

  return <div onClick={() => inc()}>{value}</div>;
};

const Age = () => {
  const { value, inc } = useCounter(0, 5000);

  return (
    <div>
      {value}
      <button onClick={() => inc()}>+</button>
    </div>
  );
};

export default App;
