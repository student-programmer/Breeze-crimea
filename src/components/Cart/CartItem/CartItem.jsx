import React from 'react';
import item from './CartItem.module.css';
import close from "./../../../asseds/images/close.png" 
const CartItem = ({ name, totalPrice, totalCount, onRemove, id, onMinus, onPlus, imgaeUrl }) => {
  
  
  const handleRemoveClick = () => {
    onRemove(id);
  };
const handlePlusItem = () =>{
    onPlus(id);
}
const handleMinusItem = () =>{
    onMinus(id);
}
  return (
    <div className={item.items}>
        <div className={item.air}>
        <img className={item.airItem} src={imgaeUrl} alt="air"/>
        </div>
        <div className={item.nameAir}> 
        <p>{name}</p>
        </div>
        <div className={item.priceAir}>
          <p>{totalPrice}</p><span className={item.rub}> ₽</span>
        </div>
        <div className={item.add}>
        <span className={item.CartSpan} onClick={handleMinusItem}>-</span>
        <span>{totalCount}</span>
        <span className={item.CartSpan} onClick={handlePlusItem}>+</span>
        </div>
       
      <div onClick={handleRemoveClick} classNam={item.cross}>
       <img className={item.crossItem} src={close} alt="close" />
      </div>
    </div>
  );
};

export default CartItem;
