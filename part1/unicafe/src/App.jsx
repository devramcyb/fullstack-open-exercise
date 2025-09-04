import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Calculate total from current state values
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;

  function setGoodReview() {
    setGood(good + 1);
  }

  function setNeutralReview() {
    setNeutral(neutral + 1);
  }

  function setBadReview() {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={setGoodReview} text="good" />
      <Button onClick={setNeutralReview} text="neutral" />
      <Button onClick={setBadReview} text="bad" />

      <h1>Statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

export default App;
