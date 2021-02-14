import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import h from './Help.module.css';
import HelpItems from './Helpitems/HelpItems';
import { setCategory } from "../../../Redux/Actions/filters";
import SortPopup from '../SortPopup/SortPopup';


const Help = ({activeCategory}) => {
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
 
  const sortRef = useRef();
   const sortPrice = useRef();
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)){
        setVisiblePopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {};
  }, []);
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  },[]);
  return (
    <div>
      <p>Предоставляем услугу в помоще выбора кондиционера.</p>
      <div className={h.sort} ref={sortRef}>
      <div className={h.visib}>
        <span onClick={toggleVisiblePopup}>Фирмы кондиционеров:</span>
      </div>
        <HelpItems activeCategory={activeCategory}
        onClickCategory={(index) => onSelectCategory(index)}
          visiblePopup={visiblePopup}
          air={['Hair', 'Balu', 'Mitsubishi', 'Bosh', 'LG', 'Rover', 'Samsung']}
        />
      </div>
      {/* <div className={h.sortTwo}  >
       <SortPopup ref={sortPrice} toggleVisiblePopup={toggleVisiblePopup} onClickCategory={(index) => onSelectCategory(index)} visiblePopup={visiblePopup} type={["С низкой цены", "С высокой цены"]}/>
      </div> */}
     
    </div>
  );
};

export default Help;
