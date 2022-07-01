export const getUserList = (param: any) => {
    return {
        type: 'USER_LIST',
        payload: param,
    };
};

export const updateList = (param: any) => {
    return {
        type: 'UPDATE_LIST',
        payload: param,
    };
};
