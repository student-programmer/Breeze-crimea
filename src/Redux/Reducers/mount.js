const SET_MOUNT = "SET_MOUNT";
const initialState = {
    value:'',
}
const mountingReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_MOUNT:
            return{ 
                ...state,
                value:action.payload,
            }
            default:
                return state;
    }
}
export default mountingReducer;