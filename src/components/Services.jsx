import '../styles/Services.css';

/**
 * Services Component
 * Displays the 6 main services offered by JeatLabs
 */
const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Desarrollo de Apps Shopify',
      description: 'Creamos aplicaciones personalizadas que se integran perfectamente con tu tienda Shopify, mejorando la funcionalidad y experiencia del usuario.',
    },
    {
      id: 2,
      title: 'Personalización de Temas',
      description: 'Diseñamos y personalizamos temas para que tu tienda refleje la identidad única de tu marca.',
    },
    {
      id: 3,
      title: 'Integraciones',
      description: 'Conectamos tu tienda Shopify con herramientas externas, APIs y servicios para automatizar procesos.',
    },
    {
      id: 4,
      title: 'Optimización',
      description: 'Mejoramos el rendimiento y las conversiones de tu tienda con soluciones técnicas avanzadas.',
    },
    {
      id: 5,
      title: 'Mantenimiento',
      description: 'Brindamos soporte continuo para mantener tus aplicaciones actualizadas y funcionando perfectamente.',
    },
    {
      id: 6,
      title: 'Consultoría',
      description: 'Te asesoramos en la mejor estrategia técnica para hacer crecer tu negocio en Shopify.',
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
