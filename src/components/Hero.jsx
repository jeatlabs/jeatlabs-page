import { Link } from 'react-router-dom';
import '../styles/Hero.css';

/**
 * Hero Component
 * Main hero section with title, description and CTA button
 */
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Desarrollamos Aplicaciones Shopify</h1>
        <p>Soluciones personalizadas para potenciar tu tienda online</p>
        <Link to="/contacto" className="cta-button">
          Contáctanos
        </Link>
      </div>
    </section>
  );
};

export default Hero;
