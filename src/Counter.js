import React, {useState} from 'react';

export default function Counter(){
    const[counter, setCounter]=useState(0);
    const[name, setName]=useState('');

    return(
        <div>
            {/* <h1>Counter App</h1> */}
            <button id='ClickMe' onClick={()=>setCounter(counter+1)}>Increment</button>
            {counter}
            <button id='ClickMe' onClick={()=>setCounter(counter>0 ?counter-1 : 0)}>Decrement</button>
            <h1>{name}</h1>
            <input onChange={(event)=>setName(event.target.value)}/>
            </div>
    )
}