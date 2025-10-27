import '../styles/Contact.css';

/**
 * Contact Component
 * Contact information and email link
 */
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="contact-intro">
          ¿Listo para llevar tu tienda Shopify al siguiente nivel?
        </p>
        <div className="contact-info">
          <p className="contact-email">
            📧 <a href="mailto:jeat.labs@gmail.com">jeat.labs@gmail.com</a>
          </p>
          <p>Estamos listos para ayudarte con tu próximo proyecto</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
