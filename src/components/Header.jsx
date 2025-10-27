import { Link } from 'react-router-dom';
import '../styles/Header.css';

/**
 * Header Component
 * Fixed navigation header with JeatLabs logo
 */
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          JeatLabs
        </Link>
      </nav>
    </header>
  );
};

export default Header;
