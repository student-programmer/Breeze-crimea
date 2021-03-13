const SET_WORKS = 'SET_WORKS';
const SET_LOADED_WORKS = 'SET_LOADED_WORKS';
const initialState = {
  items: [], 
  isLoaded: false,
}
  const worksReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_WORKS:
      return{
        ...state,
        items:action.payload,
        isLoaded:true
      };
      case SET_LOADED_WORKS:
        return{
          ...state,
          isLoaded:action.payload
        };
      default:
      return state;
    }
  };
  export default worksReducer;