import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../types/type';

export const increaseCounter = (count) => {
    return async (dispatch) => {
        dispatch({ type: INCREMENT_COUNTER, payload: count + 1 })
    }
}

export const decreaseCounter = (count) => {
    return async (dispatch) => {
        dispatch({ type: DECREMENT_COUNTER, payload: count - 1 })
    }
}

export const resetCounter = () => {
    return async (dispatch) => {
        dispatch({ type: RESET_COUNTER, payload: 0 })
    }
}