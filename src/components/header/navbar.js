import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CardWidget';

const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand" href="./">
            <img src={require('./IMG/LogoNavBar.jpg')} alt="" height="90px" width="100px" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } aria-current="page" href="./" to='/'>Home</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page" href="./" to='/category/Indumentaria'>Indumentaria</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page" href="./" to='/category/Zapatillas'>Zapatillas</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page" href="./" to='/category/Accesorios'>Accesorios</NavLink>
              <CartWidget className="CartWidget" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
