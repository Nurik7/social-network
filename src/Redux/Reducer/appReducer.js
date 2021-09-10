import {setAuthUser} from "./authReducer";

const SET_INIT = 'SET_INIT';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
    return state
}

export const initSuccess = () => ({type: SET_INIT})

export const initApp = () => (dispatch) => {
    let promise = dispatch(setAuthUser())
    Promise.all([promise])
        .then(() => {
            dispatch(initSuccess())
        })

}

export default appReducer