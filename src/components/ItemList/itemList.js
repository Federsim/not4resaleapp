import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  /* traemos "products desde el componente padre "Itemlistcontainer"*/
  return (
    <div className="listGroup">
      {products.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};
/* mostrando en pantalla con map todos los productos */

export default ItemList;
