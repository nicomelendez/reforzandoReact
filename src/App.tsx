// import { Counter } from "./components/Counter";
// import { CounterBy } from "./components/CounterBy";
// import { CounterEffect } from "./components/CounterEffect";
// import { CounterReducer } from "./counter-reducer/CounterReducer";
import { PersonalReducer } from "./personal-reducer/PersonalReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr></hr>
      {/* <Counter initialValue={15}/>
      <br>
      </br>
      <hr></hr>
      <CounterBy/>
      <br>
      </br>
      <hr></hr>
      <CounterEffect/>
      <br>
      </br>
      <hr></hr>
      <CounterReducer/> */}
      <PersonalReducer/>
    </>
  );
}

export default App;
