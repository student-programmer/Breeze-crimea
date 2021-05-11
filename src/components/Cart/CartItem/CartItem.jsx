import React from 'react';
import item from './CartItem.module.css';

const CartItem = ({ name, totalPrice, totalCount, onRemove, id, onMinus, onPlus }) => {
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
      <div>
        <p>
          {name} {totalCount} {totalPrice}{' '}
        </p>{' '}
        <span className={item.CartSpan} onClick={handleMinusItem}>-</span>
        <span className={item.CartSpan} onClick={handlePlusItem}>+</span>
      </div>
      <div onClick={handleRemoveClick} classNam={item.cross}>
        <i class="fas fa-times"></i>
      </div>
    </div>
  );
};

export default CartItem;
