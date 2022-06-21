import './ItemDetail.css'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, description, img, price ,stock, brand, size }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
      console.log(`se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity, img, brand, size})
        setQuantityAdded(quantity)
    }

  return (
    <>
      <h2>{name}</h2>
      <div class="card" >
        <img src={img} className="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{description}</p>
          <p class="card-text"> Marca: {brand}</p>
          <p class="card-text">Talle: {size}</p>
          <p class="card-text precio">Precio: {price}$</p>
        </div>
        <div>
        { quantityAdded === 0 ?  <Counter stock={stock} onAdd={handleOnAdd} /> :  <Link to='/cart'>Terminar compra</Link>}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
