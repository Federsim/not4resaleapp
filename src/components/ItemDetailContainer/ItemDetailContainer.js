import { useState, useEffect } from "react";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const {productId} = useParams();
  useEffect(() => {
    setLoading(true);
    
    getProductById(productId).then((Response) => {
      setProduct(Response);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className="cardDetail">
      <h1 className="tituloDetailContainer">Detalle del producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
