import Image from 'next/image';

const Services = () => {
  const services = [
    {
        title: 'UI UX Desingh',
        description: 'Build responsive and fast websites with modern technologies like Next.js and React.',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLn1WqE4mGGJuRpy7KrxgEkgS5p682eow6sA&s',  // Replace with your development icon/image path
      },
   
    {
      title: 'Web Development',
      description: 'Build responsive and fast websites with modern technologies like Next.js and React.',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWrnw0HZC0LqyI9mLhwCe-QFLdVj9u13Usw&s',  // Replace with your development icon/image path
    },
    {
      title: 'Prototyping',
      description: 'Turn your ideas into interactive prototypes to visualize the user journey.',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX30Iuy2d-F79F_WC2MqAi8x6LqaiDCG-0Ag&s',  // Replace with your prototyping icon/image path
 },
 {
    title: 'Next js',
    description: 'Turn your ideas into interactive prototypes to visualize the user journey.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXA1xoHjwgaUQRbR2ijwtqLkVNU4xcJ0Rndg&s',  // Replace with your prototyping icon/image path
}



  ];

  return (
    <section className="services-container">
      <h2 className="services-heading">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
