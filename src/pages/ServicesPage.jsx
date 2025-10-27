import Services from '../components/Services';
import Contact from '../components/Contact';

/**
 * Services Page
 * Dedicated page for services section
 */
const ServicesPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Soluciones completas para tu tienda Shopify</p>
        </div>
      </div>
      <Services />
      <Contact />
    </>
  );
};

export default ServicesPage;
