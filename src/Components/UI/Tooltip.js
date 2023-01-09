import React from 'react';
import Popup from 'reactjs-popup';

export const Tooltip = ({ children, buttonClass }) => (
  <Popup trigger={<button className={buttonClass}></button>} position="left top">
    <div className="mob-info">{children}</div>
  </Popup>
);
