import React from 'react';
import './VeteranOwnedBadge.css';

const VeteranOwnedBadge = () => {
  return (
    <span className="veteran-owned-badge">
      <img src="/us-flag.png" alt="US Flag" className="flag-icon" />
      VETERAN OWNED BUSINESS
      <img src="/us-flag.png" alt="US Flag" className="flag-icon" />
    </span>
  );
};

export default VeteranOwnedBadge; 