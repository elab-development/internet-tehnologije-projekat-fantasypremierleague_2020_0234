const initialState = {
    values: [],
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER_DATA':
            return {
                ...state,
                values: action.payload, // Add the custom value to the state
            };
        default:
            return state;
    }
};

export default exampleReducer;
