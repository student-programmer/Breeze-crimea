const SET_SORT_BY = "SET_SORT_BY";
const initialState = {
    sortBy:"pupular",
    category:0
}
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SORT_BY:
      return{
        ...state,
        sortBy:action.payload,
      };
      default:
      return state;
    }
  };
  export default filterReducer;