import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ name, img, price, description, id }) => {
  return (

    <div className="card">
      
      <div className="card-body">
      <img src={img} className="img-card" alt="..." />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Precio: {price}$</p>
        <Link className="btn btn-primary" to={`/detail/${id}`}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
