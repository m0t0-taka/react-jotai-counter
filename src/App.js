import { useAtom } from "jotai";
import { useState } from "react";
import "./App.css";
import { counterAtom } from "./jotai/atoms";

function App() {
  const [count, setCount] = useAtom(counterAtom);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="App">
      <h1>カウント数: {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
      <div>
        <label style={{ display: "block" }}>
          1カウントで追加したい数を入力してください
        </label>
        <input
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          value={incrementAmount}
        />
        <button onClick={() => setCount(count + incrementAmount)}>追加</button>
      </div>
    </div>
  );
}

export default App;
