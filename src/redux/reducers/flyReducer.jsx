import * as ActionType from '../actions/constants';

const initialState = {
    flyData: null,
}


export const flyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.FLY_SUCCESS: {
            const newState = { ...state, flyData: action.payload };
            state = newState;
            return { ...state }
        }

        case ActionType.FLY_FAILED: {
            const newState = { ...state, error: action.payload };
            state = newState;
            return { ...state }
        }
        default:
            return state
    }
}