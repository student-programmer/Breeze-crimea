import React from 'react'

const CartItem = ({name, totalPrice}) => {
    return (
        <div>
            <p>{name} {totalPrice}</p>
        </div>
    )
}

export default CartItem
