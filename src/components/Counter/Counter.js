import { useState } from "react";  

const Counter= ({ onAdd, stock, initial = 0}) => {
const [count, setCount] = useState(initial)

const increment = () => {
    if (count < stock) setCount(count +1)
}

const decrement = () => {
    if (count > 0) setCount(count -1)
}
return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
)
}

export default Counter