import React from 'react';
import { useState } from 'react';
import '../../Variables.css';
import './referralLink.css';

const ReferralLink = ({ referralLink }) => {
  const [coppiedLink, setCoppiedLink] = useState(false);
  const handleCopy = () => {
    const input = document.querySelector('.referralInput');
    document.execCommand('copy');
    setCoppiedLink(true);
    setTimeout(() => {
      setCoppiedLink(false);
    }, 2000);
  };
  return (
    <div className="referralLinkContainer">
      <span>Refer and earn 10% in KIMBA</span>
      <div className="referralLink">
        <input
          className="referralInput"
          type="text"
          value={referralLink}
          readOnly
        />
        <button onClick={handleCopy} className="referralButton">
          Copy
        </button>
        {coppiedLink && <span className="coppiedLink">Link coppied</span>}
      </div>
    </div>
  );
};

export default ReferralLink;