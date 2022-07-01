const initialState = {
    userList: [],
};

export const userListReducer = (state = initialState, action: {type: any; payload: any}) => {
    switch (action.type) {
        case 'USER_LIST':
            return {
                ...state,
                userList: action.payload,
            };
        case 'UPDATE_LIST':
            return {
                ...state,
                userList: [action.payload, ...state.userList],
            };
        default:
            return state;
    }
};
