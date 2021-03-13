import React from 'react';
import h from './Сatalog.module.css';
import AirBlock from './AirBlock/AirBlock';
import { useSelector } from 'react-redux';
import Help from './Help/Help';
import fetchAirs from '../../Redux/Actions/airs';
import { addAirsToCart }from '../../Redux/Actions/cart';
import { useDispatch } from 'react-redux';
import {AirsLoadingBlock} from "../index"

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector(({airs}) => airs.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const {category, sortBy} = useSelector(({filters}) => filters);
  const isLoaded = useSelector(({airs}) => airs.isLoaded);
  const handleAddAirsToCart = (obj) =>{
   dispatch(addAirsToCart(obj)) 
  }
  React.useEffect(() => {
      dispatch(fetchAirs(sortBy, category))
    }, [category, sortBy])
  return (

    <div className={h.home}>
      <div className={h.twohome}>
        {isLoaded ? items.map((obj) => (
          <AirBlock
          id={obj.id}
            imageUrl={obj.imageUrl}
            key={obj.id}
            price={obj.price}
            category={obj.category}
            items={items}
            onCkickAddAirs={handleAddAirsToCart}
            addedAirs = {cartItems[obj.id] && cartItems[obj.id].items.length}
          /> 
        )) : Array(7).fill(0).map((_, index) => <AirsLoadingBlock key={index}/>)}
      </div>
      <Help activeCategory={category}/>
    </div>
  );
};

export default Catalog;
