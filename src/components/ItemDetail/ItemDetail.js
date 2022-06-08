import './ItemDetail.css'

const ItemDetail = ({ id, name, description, img, price }) => {
  return (
    <>
      <h2>{name}</h2>
      <div class="card" >
        <img src={img} className="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{description}</p>
          <p class="card-text precio">Precio: {price}$</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
