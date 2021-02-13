const SET_AIRS = 'SET_AIRS';
const SET_LOADED = 'SET_LOADED';
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
        isLoaded:true
      };
      case SET_LOADED:
        return{
          ...state,
          isLoaded:action.payload
        };
      default:
      return state;
    }
  };
  export default airsReducer;