import {
    combineReducers
} from 'redux'

const todoReducer = (state = {}, action) => {

    switch (action.type) {
        case "TESTE":
            return {
                ...state,
                user: {
                  name: "Testão"
                }
            }
        default:
            return state
    }
}

export default todoReducer;
