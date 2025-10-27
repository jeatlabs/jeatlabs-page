import Contact from '../components/Contact';
import About from '../components/About';

/**
 * Contact Page
 * Dedicated page for contact section
 */
const ContactPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contacto</h1>
          <p>Hablemos de tu proyecto</p>
        </div>
      </div>
      <Contact />
      <About />
    </>
  );
};

export default ContactPage;
