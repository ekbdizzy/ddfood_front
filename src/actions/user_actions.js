const setDefaultUser = () => {
    return {
        type: 'SET_DEFAULT_USER',
        payload: {}
    }
};

const setUserData = (userData) => {
    return {
        type: 'SET_USER_DATA',
        payload: userData
    }
};

export {
    setDefaultUser,
    setUserData,
}