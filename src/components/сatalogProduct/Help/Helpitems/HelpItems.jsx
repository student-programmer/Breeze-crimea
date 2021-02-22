import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './HelpItems.css';

const HelpItems = React.memo( function HelpItems({onClickCategory, activeCategory, visiblePopup, air, onClickItem }) {
 

  const [sortElement, setSortElement] = useState(null);
  const onSortElement = () => {
    setSortElement(sortElement);
  };
  return (
    <div className="mark">
      <ul><li className={activeCategory === null ? 'actived' : ''}
              onClick={() => onClickCategory(null)}>
                Все
      </li>
        {visiblePopup &&
          air.map((air, cond) => (
            <li
              className={activeCategory === air ? 'actived' : ''}
              onClick={() => onClickCategory(air)}
              key={`${air}_${cond}`}
            >
              {air}
            </li>
          ))}
          {/* <li className={activeCategory === null ? 'actived' : ''}
          onClick={() => onClickCategory(air)}>
                C низкой
      </li>
      <li >
                C высокой
      </li> */}
      </ul>
    </div>
  );
}
)
HelpItems.propTypes={
  activeCategory: PropTypes.string,
onClickItem: PropTypes.func
}
HelpItems.defaultProps={
  air:'',
  activeCategory: null
}
export default HelpItems;
