import React, { useState } from 'react';
import h from './Сatalog.module.css';
import AirBlock from './AirBlock/AirBlock';
import { useSelector } from 'react-redux';
// import Help from './Help/Help';
import fetchAirs from '../../Redux/Actions/airs';
import { addAirsToCart }from '../../Redux/Actions/cart';
import { useDispatch } from 'react-redux';
import {AirsLoadingBlock} from "../index"
import loupe from './../../asseds/images/loupe.png';

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
     const [value, setValue] = useState("");
     const filteredAirs = items.filter( air => {
       return air.category.toLowerCase().includes(value.toLowerCase())
     })
const itemClickHandler = (e) =>{
  setValue(e.target.textContent)
  setIsOpen(!isOpen)
}
const [isOpen, setIsOpen] = useState(true)
const inputClickHandler = () =>{
  setIsOpen(true)
}

  return (

    <div className={h.home}>
      <div className={h.form}>
        <form className={h.form1} action="">
          <input className={h.formItem}value={value} placeholder="Введите название кондиционера..." type="text" onClick={inputClickHandler} onChange={(event) => setValue(event.target.value)}/>
          <img className={h.search} src={loupe} alt="loupe" />
          <ul className={h.autocomplete}>
        {  
        value && isOpen ? filteredAirs.map((obj) => (
          <li  key={obj.id} className={h.autocompleteItem} onClick={itemClickHandler}>{obj.category}</li>
                ))
                : null
      } 
          </ul>
          </form>
      </div>
      <div className={h.twohome}>
        {isLoaded ? filteredAirs.map((obj) => (
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
      {/* <Help activeCategory={category}/> */}
    </div>
  );
};

export default Catalog;
