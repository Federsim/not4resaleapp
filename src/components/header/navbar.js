import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CardWidget';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="./">
            <img src={require('./IMG/LogoNavBar.jpg')} alt="" height="90px" width="100px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } aria-current="page" href="./" to='/'>Home</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page" href="./" to='/category/Indumentaria'>Indumentaria</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page" href="./" to='/category/Zapatillas'>Zapatillas</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link" } aria-current="page" href="./" to='/category/Accesorios'>Accesorios</NavLink>
              <CartWidget />
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
