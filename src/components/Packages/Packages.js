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
    <button className="select-btn">Select</button>
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

  return (
    <section className="packages-section">
      <div className="packages-header">
        <h2>Choose a package</h2>
        <span>Updated May 11th &#x2713;</span>
      </div>
      <div className="packages-container">
        {packageData.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default Packages; 