import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="header">
    <Link to="/" className="site-title">FİLM<span>REHBERİ</span></Link>
    <nav className="main-nav">
      <NavLink to="/" className="nav-link">Giriş</NavLink>
      <NavLink to="/filmler" className="nav-link">Filmleri Keşfet</NavLink>
    </nav>
  </header>
);
export default NavBar;