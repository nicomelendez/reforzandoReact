import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";


const INITIAL_STATE:CounterState = {
    counter:0,
    previous:0,
    changes:0
}

export const CounterReducer = () => {

    const [counterState, dispatch] = useReducer(counterReducer,INITIAL_STATE);

    const handleReset = () =>{
        dispatch({ type:'reset'})
    }

    const increaseBy = (value:number) => {
        dispatch({type:'increaseBy', payload:{value}})
    }

  return (
    <>
        <h2>Counter Reducer:</h2>
        <pre>
            {JSON.stringify(counterState,null,2)}
        </pre>

        <button onClick={handleReset}>Reset</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>increaseBy(1)}>+1</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>increaseBy(5)}>+5</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>increaseBy(10)}>+10</button>
    </>
  )
}