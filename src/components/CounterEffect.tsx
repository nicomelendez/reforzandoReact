import { useCounter } from "../hooks/useCounter"

export const CounterEffect = () => {

   const {counter,setCounter,elementToAnimate, handleClick, maxCount} = useCounter({
    maxCount:10
    });

  return (
    <>
        <h2>CounterEffect:</h2>
        <h2 ref={elementToAnimate}>{counter}</h2>

        {
            counter===maxCount ? (<>
                <p>Se ha llegado al maximo</p>
                <button onClick={()=>setCounter(0)}>Reiniciar</button>
            </>):
            (<> <button onClick={handleClick}>+1</button></>)
        }
    </>
  )
}
