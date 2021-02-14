const SET_CART = 'SET_CART';
const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const ADD_AIRS_CART = "ADD_AIRS_CART"
const initialState = {
items:{},
totalPrice:0,
totalCount:0,
}
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AIRS_CART:{ 
            const  newItems = {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id] 
                     ? [action.payload] :
                     [...state.items[action.payload.id],
                     action.payload]
            };
            const allAirs = [].concat.apply([], Object.values(newItems));

            const totalPrice = allAirs.reduce((sum, obj) => obj.price + sum, 0);
            console.log(totalPrice)
            return{ 
                ...state,
                items:newItems,
                totalCount: allAirs.length,
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
      default:
      return state;
    }
  };
  export default cartReducer;