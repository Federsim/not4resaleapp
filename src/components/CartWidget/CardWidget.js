import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <img src={require('./img/shopping-cart-64.png')} alt='cart' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget