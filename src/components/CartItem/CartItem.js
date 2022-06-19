import '../CartList/CartList.css'
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList"

const CartItem = ({ name, img, price, id, brand, size }) => {

    

    return (
        <aside className="col-lg-9">
        <div className="card">
            <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                        <tr className="small text-uppercase">
                            <th scope="col">Product</th>
                            <th scope="col" width="120">Quantity</th>
                            <th scope="col" width="120">Price</th>
                            <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <figure className="itemside align-items-center">
                                    <div className="aside"><img src={img} className="img-sm"/></div>
                                    <figcaption className="info"> <a href="" className="title text-dark" data-abc="true">{name}</a>
                                        <p className="text-muted small">SIZE:{size}<br/> Brand: {brand}</p>
                                    </figcaption>
                                </figure>
                            </td>
                            <td> <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select> </td>
                            <td>
                                <div className="price-wrap"> <var className="price">{price}</var></div>
                            </td>
                            <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart"></i></a> <a href="" className="btn btn-light" data-abc="true"> Remove</a> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </aside>
    );
  };
  
export default CartItem