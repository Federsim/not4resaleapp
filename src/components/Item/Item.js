const Item = ({ name, img, price }) => {
  return (
    <li>
      {<img src={img} alt={name} width="150px" />}
      <br />
      {name}
      <br />
      <p>Precio: {price}</p>

      <button>Ver Detalle</button>
      <br/>
      <br/>
    </li>
  );
};

export default Item;
