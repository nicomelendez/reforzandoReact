import { useReducer } from "react"
import { act } from "react-dom/test-utils";

interface CounterState {
    counter:number;
    previous:number;
    changes:number;
}

type CounterAction = 
    |{type:'increaseBy',payload:{value:number;}}
    |{type:'reset'};

const INITIAL_STATE:CounterState = {
    counter:0,
    previous:0,
    changes:0
}

const counterReducer = (state:CounterState, action:CounterAction):CounterState =>{

    const {counter,changes} = state;

    switch(action.type){
        case 'reset':
            return {
                counter:0,
                changes:0,
                previous:0
            }
       
        case 'increaseBy':
            return {
                counter:counter + action.payload.value,
                changes:changes+1,
                previous:counter
            }
    
        default:
            return state;
    }

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