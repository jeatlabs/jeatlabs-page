import '../styles/Footer.css';

/**
 * Footer Component
 * Site footer with copyright information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} JeatLabs. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
