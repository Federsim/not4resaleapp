import "./Item.css";
import { Link } from "react-router-dom";
/* import {context} from '../../App' */

const Item = ({ name, img, price, id, brand, size }) => {
  return (

    <div className="card">
      
      <div className="card-body">
      <img src={img} className="img-card" alt="..." />
        <h5 className="card-title">{name}</h5>
        <h6 className="card-title">Marca: {brand}</h6>
        <h6 className="card-title">Talle: {size}</h6>
        <p className="card-text">Precio: {price}$</p>
        <Link className="btn btn-primary" to={`/detail/${id}`}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
