const SET_CART = 'SET_CART';
const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const ADD_AIRS_CART = "ADD_AIRS_CART"
const CLEAR_CART = "CLEAR_CART"
const REMOVE_AIRS_CART = "REMOVE_AIRS_CART"
const MINUS_CART_ITEM = "MINUS_CART_ITEM"
const PLUS_CART_ITEM = "PLUS_CART_ITEM"
const initialState = {
items:{},
totalPrice:0,
totalCount:0,
};
const   _get = (obj, path) =>{
    const [firstKey, ...keys] = path.split('.')
 return keys.reduce((val, key) => {
    return val[key]
     }, obj[firstKey])
}
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);
const getTotalSum = (obj, path) =>  {
   return Object.values(obj).reduce(
        (sum, obj) => {
            const value = _get(obj, path)
             return sum + value
        }, 0
        
    )
}

  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AIRS_CART:{ 
            const currentAirsItems = !state.items[action.payload.id] 
            ? [action.payload] :
            [...state.items[action.payload.id].items,
            action.payload];
            const  newItems = {
                    ...state.items,
                    [action.payload.id]:{
                        items:currentAirsItems,
                        totalPrice: getTotalPrice(currentAirsItems),
                    }
            };
            
            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')
            return{ 
                ...state,
                items:newItems,
                totalCount,
                totalPrice,

            }
        }
      case SET_CART:
      return{

      };
      case SET_TOTAL_PRICE:
          return{
              ...state,
              totalPrice:action.payload
          }
          case SET_TOTAL_COUNT:
              return{
                  ...state,
                  totalCount:action.payload,
              }
              case CLEAR_CART:
                  return{
                      totalPrice:0,
                      totalCount:0,   
                      items:{},
                  }
                  case REMOVE_AIRS_CART: { 
                  const newItems = {
                      ...state.items
                  }
                  const currentTotalPrice = newItems[action.payload].totalPrice;
                  const currentTotalCount = newItems[action.payload].items.length;
                  delete newItems[action.payload];
                  return{
                    ...state,
                    items:newItems,
                    totalPrice: state.totalPrice - currentTotalPrice,
                    totalCount: state.totalCount - currentTotalCount,
                  }
                }
                case PLUS_CART_ITEM:{
                    const newObjectItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]
                    const newItems = {
                            ...state.items,
                            [action.payload]: {
                                items: newObjectItems,
                                totalPrice: getTotalPrice(newObjectItems),
                            },
                        }
                    
                    const totalCount = getTotalSum(newItems, 'items.length')
                    const totalPrice = getTotalSum(newItems, 'totalPrice')
                   
                    return{
                        ...state,
                        items: newItems,
                        totalCount,
                        totalPrice,
                    }
                };
                case MINUS_CART_ITEM:{
                    const oldItems = state.items[action.payload].items
                    const newObjectItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
                     const newItems = {
                            ...state.items,
                            [action.payload]: {
                                items: newObjectItems,
                                totalPrice: getTotalPrice(newObjectItems),
                            }
                        }
                     const totalCount = getTotalSum(newItems, 'items.length')
                     const totalPrice = getTotalSum(newItems, 'totalPrice')
                   
                    return{
                        ...state,
                       items: newItems,
                       totalCount,
                       totalPrice,
                    }
                }
      default:
      return state;
    }
  };
  export default cartReducer;