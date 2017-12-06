export default function courseReducer(state=[], action) {
    switch(action.type){
        case 'CREATE_COURSE':
            debugger;
            // Mutating state, not good...            
            // state.push(action.course);
            // return state;
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}