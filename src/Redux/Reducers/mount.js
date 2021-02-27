const SET_MOUNT = "SET_MOUNT";
const UPDATE_MOUNT = "UPDATE_MOUNT";
const SET_STATUS = "SET_STATUS"
const initialState = {
    value:'',
    updateMount:"",
    status:false,
}
const mountingReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_MOUNT:
            return{ 
                ...state,
                value:action.payload,
            }
            case UPDATE_MOUNT:
                return{
                    ...state,
                    updateMount:action.payload,
                }
                case SET_STATUS:
                    return{
                        ...state,
                        status:action.payload,
                    }
            default:
                return state;
    }
}
export default mountingReducer;