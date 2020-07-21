
const ADD_FILTERS = 'ADD_FILTERS';
const REMOVE_FILTERS = 'REMOVE_FILTERS';
const initialState=[];

export function addFilter(filter){
    return{
        type: ADD_FILTERS,
        filter
    }
}

export function removeFilter(filter){
    return{
        type: REMOVE_FILTERS,
        filter
    }
}
export default function Filters(state=initialState,action){
    switch(action.type){
        case ADD_FILTERS:
            return[...state,action.filter]
        case REMOVE_FILTERS:
            return state.filter((i) => i!==action.filter) 
        default:
            return state;    
    }
}