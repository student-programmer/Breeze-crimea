const SET_SORT_BY = "SET_SORT_BY";
const SET_CATEGORY = "SET_CATEGORY";
const SET_LOADES = "SET_LOADES"
const initialState = {
    sortBy:"pupular",
    category:null,
    loades:"yes",
}
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SORT_BY:
      return{
        ...state,
        sortBy:action.payload,
      };
      case SET_CATEGORY:
        return {
          ...state,
          category: action.payload
        };
        case SET_LOADES:
          return{
            ...state,
            loades:"yes"
          };
      default:
      return state;
    }
  };
  export default filterReducer;