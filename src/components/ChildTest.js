import React, {useState} from "react";

export default function ChildTest(props){

    const [value, changeValue]= useState('true');

    return(
        <div>
            <p id='para1'>Updated Value: {value}</p>
            <button id='para2' data-testid="change-button" onClick={()=>changeValue('false')}>Button</button>
            <p>Count on Child: {props.count}</p>
            <button id='increment' data-testid="increment-button" onClick={()=>props.add()}>Increment</button>
        </div>
    )
}