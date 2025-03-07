export const addUserData = (value) => {
    return {
        type: 'ADD_USER_DATA',
        payload: value, // Custom data to be sent to the reducer
    };
};
