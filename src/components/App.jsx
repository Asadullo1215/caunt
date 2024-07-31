import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0)
    function oshirish() {
        setCount(count + 10)
    }
    function kamayish() {
        setCount(count - 10)
    }
    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={kamayish}>-</button>
            <button onClick={oshirish}>+</button>
        </div>
    )
}

export default App;