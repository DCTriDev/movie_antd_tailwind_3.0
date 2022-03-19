import {LOADING_END, LOADING_START} from "../constants/loadingAnimationTypes";

const initialState = {
    loading: false,
    count: 0
}

const loadingAnimateReducer = (state = initialState, {type}) => {
    switch (type) {
        case LOADING_START: {
            return {...state, loading: true}
        }
        case LOADING_END: {
            state.count--
            if (state.count <= 0) {
                return {...state, loading: false}
            }
            return {...state}
        }
        default:
            return state
    }

}

export default loadingAnimateReducer;