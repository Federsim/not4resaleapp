import "./ItemDetail.css";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import { useNotification } from "../Notification/Notification";

const ItemDetail = ({
  id,
  name,
  description,
  img,
  price,
  stock,
  brand,
  size,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const setNotification = useNotification();

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setNotification("success", `Se agregaron ${quantity} ${name} al carrito`,10);
    addItem({ id, name, price, quantity, img, brand, size });
    setQuantityAdded(quantity);
  };

  return (
    <>
      <h2>{name}</h2>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text"> Marca: {brand}</p>
          <p className="card-text">Talle: {size}</p>
          <p className="card-text precio">Precio: {price}$</p>
        </div>
        <div>
          {quantityAdded === 0 ? (
            <Counter stock={stock} onAdd={handleOnAdd} />
          ) : (
            <Link className="btn btn-primary" to="/cart">Terminar compra</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
