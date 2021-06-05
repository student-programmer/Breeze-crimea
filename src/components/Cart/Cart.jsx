import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import cart from './Cart.module.css';
import { clearCart, removeCartAirs, plusCartItem, minusCartItem } from '../../Redux/Actions/cart';
import { NavLink } from 'react-router-dom';
import newImage from "./../../asseds/images/new.png" 
import deleteImg from "./../../asseds/images/delete.png" 
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
        <div className={cart.wrapperCart1} >
          {' '}
          <div className={cart.name}>
            <p>Корзина покупок</p>
          </div>
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
            <img src={deleteImg} alt="" />
            <p>Очистить корзину</p>
          </div>
          <div className={cart.flexItem}> 
          <div className={cart.Count}>
            <p>Всего товаров: <span className={cart.countItem}>{totalCount}</span></p>
          </div>
          <div className={cart.price}>
            <p> К оплате: <span className={cart.priceItem}>{totalPrice}</span> <span className={cart.rub}>₽</span> </p>
          </div>{' '}
          </div>
        </div>
      ) : (
        <div className={cart.wrapperCart2}>
          <div className={cart.name}>
            <p>Корзина покупок</p>
          </div>
          <div className={cart.Error}> 
          <div className={cart.war}>
            <p className={cart.warItem}>Упс...</p>
          </div>
          <p className={cart.infoCart}>Кажется вы еще ничего не добавили в корзину</p>
          <div className={cart.comeBack}> 
          <img src={newImage} alt="<" />
          <NavLink className={cart.comeBackItem} to="/catalog">Вернутся назад</NavLink>
           </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
