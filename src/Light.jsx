import React from 'react';

const Light = () => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <span><ion-icon name="bulb-outline" /></span>
        <div className="bulb" />
      </label>
    </div>
  );
};

export default Light;
