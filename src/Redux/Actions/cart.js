export const addAirsToCart = (airsObj) => ({ 
type: "ADD_AIRS_CART",
payload:airsObj,
})
export const clearCart = () => ({ 
    type: "CLEAR_CART",
    })
    
export const removeCartAirs = (id) => ({ 
    type: "REMOVE_AIRS_CART",
    payload:id,
    })
    
    export const plusCartItem = (id) => ({ 
        type:"PLUS_CART_ITEM",
        payload:id,
        })
        
        export const minusCartItem = (id) => ({ 
            type:"MINUS_CART_ITEM",
            payload:id,
            })
            