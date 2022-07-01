import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
         <Link to='/cart' className="CartWidget my-2 my-lg-0">
            <img src={require('./img/shopping-cart-64.png')} alt='cart' className='CartImg'/>
            { totalQuantity }
        </Link>
    );
}

export default CartWidget