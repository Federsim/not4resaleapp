const CartCheckoutItem = ({name,brand,price, quantity }) => {

    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{name}</h6>
          <small className="text-muted">{brand}</small>
          
        </div>
        <small className="text-muted">x<strong>{quantity}</strong></small>
        <span className="text-muted">${price}</span>
      </li>
    )
}

export default CartCheckoutItem