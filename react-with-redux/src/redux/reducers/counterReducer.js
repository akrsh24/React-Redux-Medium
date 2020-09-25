const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNTER": return { ...state, count: action.payload };
        case "DECREMENT_COUNTER": return { ...state, count: action.payload };
        case "RESET_COUNTER": return { ...state, count: action.payload };
        default: return state;
    }
}

export default counterReducer;
