import   filterReducer   from './filter'
import   airsReducer   from './airs'
import  {  combineReducers }  from 'redux';
import mountingReducer from './mount';
const rootReducer = combineReducers({
   filters: filterReducer,
   airs: airsReducer,
   mounting: mountingReducer,
})

export default rootReducer;