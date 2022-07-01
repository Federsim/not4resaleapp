import { useState } from "react";

const Counter = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button className="btn btn-secondary" onClick={increment}>+</button>
      <button className="btn btn-secondary" onClick={decrement}>-</button>
      <br/>
      <br/>
      <div>
        <button  className="btn btn-primary" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
