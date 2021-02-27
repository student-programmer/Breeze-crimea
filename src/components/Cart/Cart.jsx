import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import cart from './Cart.module.css';
import { clearCart, removeCartAirs, plusCartItem, minusCartItem } from '../../Redux/Actions/cart';
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const dispatch = useDispatch();
  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };
  const onRemoveItem = (id) =>{
      if(window.confirm("Вы действительно хотите удалить?")){
      dispatch(removeCartAirs(id));
       }
  }
  const onPlusItem = (id) =>{
    dispatch(plusCartItem(id))
  }
  const onMinusItem = (id) =>{
    dispatch(minusCartItem(id))
  }
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);


  const addedCondinting = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  return (
    <div to="/cart" className={cart.HeadBlock}>
      {totalCount ? (
        <div>
          {' '}
          <div className={cart.item}>
            {addedCondinting.map((obj) => (
              <CartItem
              key={obj.id}
                id={obj.id}
                name={obj.category}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onPlus={onPlusItem}
                onMinus={onMinusItem}
              />
            ))}
          </div>
          <div className={cart.clear} onClick={onClearCart}>
            <p>Очистить корзину</p>
          </div>
          <div className={cart.Count}>
            <p>Всего кондиционеров: {totalCount}</p>
          </div>
          <div className={cart.price}>
            <p> Сумма заказа: {totalPrice}</p>
          </div>{' '}
        </div>
      ) : (
        <div>
          <p>Наверно вы ещё ничего не заказали</p>
          <NavLink to="/catalog">Вернутся назад</NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
