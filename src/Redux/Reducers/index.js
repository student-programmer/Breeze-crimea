import   filterReducer   from './filter'
import   airsReducer   from './airs'
import  {  combineReducers }  from 'redux';
import mountingReducer from './mount';
import cartReducer from './cart';
import worksReducer from './works';

const rootReducer = combineReducers({
   filters: filterReducer,
   airs: airsReducer,
   mounting: mountingReducer,
   cart:cartReducer,
   works: worksReducer
})

export default rootReducer;