import Item from "../Item/Item";

const ItemList = ({ products }) => {
  /* traemos "products desde el componente padre "Itemlistcontainer"*/
  return (
    <ul>
      {products.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </ul>
  );
};
/* mostrando en pantalla con map todos los productos */

export default ItemList;
