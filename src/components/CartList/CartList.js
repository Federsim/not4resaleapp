import './CartList.css'
import CartItem from "../CartItem/CartItem"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartList = () => {

const { cart, clearCart, totalPurchase, totalQuantity } = useContext(CartContext) 

    return (
        <div className="container-fluid">
        <div className="row">

            <aside className="col-lg-9">
                
            {totalQuantity > 0 ? (cart.map(p => <CartItem key={p.id} {...p}/>) ) : ( 
            <div>
            <h1>Cart is empty </h1>
            <Link to='/' href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</Link>
            </div>
            ) }
                <div className="card mb-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group"> <label>Have coupon?</label>
                                <div className="input-group"> <input type="text" className="form-control coupon" name="" placeholder="Coupon code"/> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <dl className="dlist-align">
                            <dt>Total:</dt>
                            <dd className="text-right text-dark b ml-3"><strong>${totalPurchase}</strong></dd>
                        </dl>
                        <hr/> <a href="#" className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a> <Link to='/' href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</Link> <br/> <a href="#" className="btn btn-out btn-primary btn-square btn-main" onClick={() => clearCart()}  data-abc="true" > Clear Cart </a>
                    </div>
                </div>
            </aside>
        </div>
    </div>
    )
}

export default CartList