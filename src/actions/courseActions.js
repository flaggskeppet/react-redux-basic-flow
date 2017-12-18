import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi'

// export function createCourse(course) {
//     // Below course is really {course:course} - an es6 shorthand
//     {return {type: 'types.CREATE_COURSE', course}}
// }

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
    return function(dispatch) {
        courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}