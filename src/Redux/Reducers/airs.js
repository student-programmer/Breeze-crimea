const SET_AIRS = 'SET_AIRS';
const initialState = {
  items: [], 
  isLoaded: false
}
  const airsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_AIRS:
      return{
        ...state,
        items:action.payload,
      };
      default:
      return state;
    }
  };
  export default airsReducer;