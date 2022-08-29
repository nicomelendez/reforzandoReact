import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter,setCounter] = useState(8);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () =>{
        setCounter(prev => Math.min(prev+1,MAXIMUN_COUNT));
    }

    useEffect(()=>{
        if(counter<10) return;

        const tl = gsap.timeline();

        console.log("%cSe llego al valor maximo","color:red; background-color:black;");
        tl.to(counterElement.current,{y: -10, duration:0.4, ease: 'ease.out'});
        tl.to(counterElement.current,{y: 0, duration:1, ease: 'bounce.out'});

    },[counter])

  return (
    <>
        <h2>CounterEffect:</h2>
        <h2 ref={counterElement}>{counter}</h2>

        {
            counter===10 ? (<>
                <p>Se ha llegado al maximo</p>
                <button onClick={()=>setCounter(0)}>Reiniciar</button>
            </>):
            (<> <button onClick={handleClick}>+1</button></>)
        }
    </>
  )
}
