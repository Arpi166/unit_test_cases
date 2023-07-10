import React, {useState} from "react";
import ChildTest from "./ChildTest";

export const fun = () => {
    setTimeout(() => {
       console.log('hello')
    }, 300);
};

export default function useParentTest(){

    const [count, setCount]= useState(0);
    const [guessValue, setGuessValue] = useState('');

    let increment=()=>{ 
         setCount(count=>count+1)
    }

    return(
        <div className="parent"> 
            <ChildTest data-testid="count-child" count={count} add={(increment)}/>
            <input data-testid='input-box' type='text' value={guessValue} onChange={(event)=>setGuessValue(event.target.value)} />
            <h3 id='count-parent' data-testid="count">Count on Parent: {count}</h3>
            <button onClick={()=>fun()}>Greet</button>
        </div>
    )
}