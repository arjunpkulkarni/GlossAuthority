import React from 'react';
import './Packages.css';

const PackageCard = ({ title, subtitle, features, color }) => (
  <div className="package-card" style={{ borderColor: color }}>
    <h3 style={{ color }}>{title}</h3>
    <p className="package-subtitle">{subtitle}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const Packages = () => {
  const packageData = [
    {
      title: 'Bronze',
      subtitle: 'Basic Wash & Wax',
      features: [
        'Hand wash exterior',
        'Clean wheels & tires',
        'Apply wax protection',
        'Clean windows',
      ],
      color: '#CD7F32' // Bronze color
    },
    {
      title: 'Silver',
      subtitle: 'Premium Detail',
      features: [
        'Everything in Bronze package',
        'Interior vacuum & wipe down',
        'Leather conditioning',
        'Engine bay cleaning',
      ],
      color: '#C0C0C0' // Silver color
    },
    {
      title: 'Gold',
      subtitle: 'Ultimate Protection',
      features: [
        'Everything in Silver package',
        'Paint correction',
        'Ceramic coating application',
        'Headlight restoration',
        'Fabric protection',
      ],
      color: '#FFD700' // Gold color
    },
  ];

  const servicePriceData = [
    {
      category: 'Sedan Services',
      services: [
        { name: 'Full Detail', price: '$200' },
        { name: 'Interior only', price: '$150' },
        { name: 'Exterior only', price: '$65' },
      ],
    },
    {
      category: 'SUV Services',
      services: [
        { name: 'Full Detail', price: '$250' },
        { name: 'Interior only', price: '$200' },
        { name: 'Exterior only', price: '$75' },
      ],
    },
    {
      category: 'Coupe Services',
      services: [
        { name: 'Full Detail', price: '$185' },
        { name: 'Interior only', price: '$140' },
        { name: 'Exterior only', price: '$60' },
      ],
    },
    {
      category: 'Truck Services',
      services: [
        { name: 'Full Detail', price: '$280' },
        { name: 'Interior only', price: '$220' },
        { name: 'Exterior only', price: '$75' },
      ],
    },
  ];

  return (
    <section className="packages-section">
      <div className="packages-header">
        <h2>Choose a package</h2>
      </div>
      <div className="packages-container">
        {packageData.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>

      <div className="service-prices-header">
        <h2>Individual Service Prices</h2>
      </div>
      <div className="service-prices-container">
        {servicePriceData.map((categoryItem, catIndex) => (
          <div key={catIndex} className="service-price-category">
            <h3>{categoryItem.category}</h3>
            <ul>
              {categoryItem.services.map((service, index) => (
                <li key={index} className="service-price-item">
                  <span>{service.name}:</span>
                  <span>{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages; 