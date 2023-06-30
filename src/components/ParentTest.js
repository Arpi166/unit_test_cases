import React, { useState } from "react";
import ChildTest from "./ChildTest";

export default function ParentTest(){

    const [count, setCount]=useState(0);

    let increment=()=>{
        return setCount(count=>count+1)
    }

    return(
        <div className="parent"> 
            <ChildTest count={count} add={(increment)}/>
            <h3 id='count-parent' data-testid="count">Count on Parent: {count}</h3>
        </div>
    )
}