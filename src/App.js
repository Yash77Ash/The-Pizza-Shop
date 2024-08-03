import React, { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1); // Update count using the current value of count
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Messege count={count} />
    </div>
  );
}

function Messege(props) {
  return <h4>You have read {props.count} pieces of advice</h4>;
}
