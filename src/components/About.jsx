import '../styles/About.css';

/**
 * About Component
 * Information about JeatLabs and company expertise
 */
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">Sobre JeatLabs</h2>
        <div className="about-content">
          <div>
            <h3 className="about-subtitle">Expertos en Shopify</h3>
            <p className="about-text">
              En JeatLabs nos especializamos en el desarrollo de aplicaciones y soluciones para el ecosistema Shopify.
            </p>
            <p className="about-text">
              Nuestro equipo combina experiencia técnica con conocimiento profundo de e-commerce para crear soluciones que realmente impulsan tu negocio.
            </p>
            <p className="about-text">
              Trabajamos con las últimas tecnologías y mejores prácticas para garantizar aplicaciones robustas, escalables y fáciles de mantener.
            </p>
          </div>
          <div className="about-cta-wrapper">
            <div className="about-cta">
              <h3 className="about-cta-title">¿Tienes un proyecto en mente?</h3>
              <p className="about-cta-text">Convirtamos tu idea en realidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
