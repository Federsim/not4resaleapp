const CartCheckoutItem = ({name,brand,price }) => {

    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{name}</h6>
          <small className="text-muted">{brand}</small>
        </div>
        <span className="text-muted">${price}</span>
      </li>
    )
}

export default CartCheckoutItem