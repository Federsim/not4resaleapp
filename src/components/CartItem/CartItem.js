import "../CartList/CartList.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({ img, price, id, brand, size, name, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <aside className="col-lg-9">
      <div className="card">
        <div className="table-responsive">
          <table className="table table-borderless table-shopping-cart">
            <thead className="text-muted">
              <tr className="small text-uppercase">
                <th scope="col">Product</th>
                <th scope="col" width="120">
                  Quantity
                </th>
                <th scope="col" width="120">
                Price by unit
                </th>
                <th
                  scope="col"
                  className="text-right d-none d-md-block"
                  width="200"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <figure className="itemside align-items-center">
                    <div className="aside">
                      <img src={img} className="img-sm" />
                    </div>
                    <figcaption className="info">
                      {" "}
                      <p className="title text-dark" data-abc="true">
                        {name}
                      </p>
                      <p className="text-muted small">
                        <strong>Size:</strong> {size}
                        <br /> 
                        <strong>Brand:</strong> {brand}
                      </p>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  {" "}
                  <p className="form-control">
                  {quantity}
                  </p>{" "}
                </td>
                <td>
                  <div className="price-wrap">
                    {" "}
                    <var className="price">{price}</var>
                  </div>
                </td>
                <td className="text-right d-none d-md-block">
                  {" "}
                  <button
                    href=""
                    className="btn btn-light"
                    onClick={() => handleRemove(id)}
                    data-abc="true"
                  >
                    {" "}
                    Remove
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  );
};

export default CartItem;
