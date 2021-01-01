import { combineReducers } from 'redux';
import register_info from './register_info';
import load_info from './load_info';

export default combineReducers({
    register_info,
    load_info
});