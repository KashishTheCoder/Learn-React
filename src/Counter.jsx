import { useState } from 'react'

function Counter(){

    const [count, setCount] = useState(0);



    return (
        <>
            <h1>Counter {count}</h1>
            <button onClick={() => setCount(count => count+1)}>Count Up ({count})</button>
            <button onClick={() => setCount(count => count>0 ? count-1 : count)}>Count Down</button>
        </>
    )
    
}

export default Counter;