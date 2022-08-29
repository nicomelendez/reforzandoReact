import { Counter } from "./components/Counter";
import { CounterBy } from "./components/CounterBy";
import { CounterEffect } from "./components/CounterEffect";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr></hr>
      <Counter initialValue={15}/>
      <br>
      </br>
      <hr></hr>
      <CounterBy/>
      <br>
      </br>
      <hr></hr>
      <CounterEffect/>
    </>
  );
}

export default App;
