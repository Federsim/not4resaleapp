import { useEffect, useState } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/itemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  /* funcion para ejecutar dsp del montaje y guardar productos en el estado, se guarda para que react valide los datos y en caso de un cambio vuelva a renderizar */

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
