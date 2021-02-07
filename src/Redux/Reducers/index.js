import   filterReducer   from './filter'
import   airsReducer   from './airs'
import  {  combineReducers }  from 'redux';
const rootReducer = combineReducers({
   filters: filterReducer,
   airs: airsReducer,
})

export default rootReducer;