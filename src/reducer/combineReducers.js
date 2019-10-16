import {combineReducers} from 'redux';

import calculators from './calculator/calculators';
import list from './list/list';

const appReducer = combineReducers({
    calculators,
    list,
});
export default appReducer;