import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem/CartItem'
import cart from "./Cart.module.css"
const Cart = ({  }) => {
    const {totalPrice, totalCount, items} = useSelector(({cart}) => cart)

    const addedCondinting = Object.keys(items).map(key => {
        return items[key].items[0];
    });
    return (
        <div> <div> 
            {addedCondinting.map((obj) => (
                <CartItem name={obj.category} totalPrice={items[obj.id].totalPrice}/>
            ))
        }
        </div>
             <div className={cart.Count}>
                 <p>Всего кондиционеров: {totalCount}</p>
             </div>
             <div className={cart.price}>
                 <p> Сумма заказа: {totalPrice}</p>
             </div>
        </div> 
    )
}

export default Cart
