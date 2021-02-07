import React, { useState } from 'react';
import './HelpItems.css';

const HelpItems = ({ visiblePopup, air, sortElem }) => {
  const [cutName, setCutName] = useState(null);
  const onCutName = (air) => {
    setCutName(air);
  };
  const [sortElement, setSortElement] = useState(null);
  const onSortElement = (sortElement) => {
    setSortElement(sortElement);
  };
  return (
    <div className="mark">
      <ul>
        {visiblePopup &&
          air.map((air, cond) => (
            <li
              className={cutName === air ? 'actived' : ''}
              onClick={() => onCutName(air)}
              key={`${air}_${cond}`}
            >
              {air}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HelpItems;
