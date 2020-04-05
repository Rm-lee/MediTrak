export const ADD_PLAN = "ADD_PLAN"
export const DELETE_PLAN = "DELETE_PLAN"

export const addPlan = (plan) => {
    return dispatch => {
        dispatch({ type: ADD_PLAN, payload: plan });
    }
}