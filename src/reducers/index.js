import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses //Really the same as {courses:courses}, ES6 'Shorthand property name'
});

export default rootReducer;
