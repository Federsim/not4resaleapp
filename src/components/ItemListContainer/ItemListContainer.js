import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../asyncmock";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!categoryId) {
      getProducts()
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProductsByCategory(categoryId)
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  /* funcion para ejecutar dsp del montaje y guardar productos en el estado, se guarda para que react valide los datos y en caso de un cambio vuelva a renderizar */

  return (
    <div className="listContainer">
      <h1>{props.greeting}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <h1>No hay Stock</h1>
      )}
    </div>
  );
};
export default ItemListContainer;
