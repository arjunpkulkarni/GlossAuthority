import React from 'react';
import './VeteranOwnedBadge.css';
import flag from "../VeteranOwnedBadge/flag.png"

const VeteranOwnedBadge = () => {
  return (
    <span className="veteran-owned-badge">
      <img src={flag} alt="US Flag" className="flag-icon" />
      VETERAN OWNED BUSINESS
      <img src={flag} alt="US Flag" className="flag-icon" />
    </span>
  );
};

export default VeteranOwnedBadge; 