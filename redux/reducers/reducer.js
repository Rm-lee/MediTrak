import {ADD_PLAN,DELETE_PLAN} from '../actions/plan'
const initialState = {
    plans:[]
}
export const planReducer = (state= initialState,action) => {
    switch(action.type){
        case ADD_PLAN:
           return{  ...state,
            plans:state.plans.concat(action.payload)
        }

        case DELETE_PLAN:
            return;
        default:
            return state;
    }
}