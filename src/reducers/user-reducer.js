const DefaultUser = {
    id: null,
    isAuthenticated: false,
    token: null,
    fullName: '',
    email: '',
    phone: 7,
    bonuses: 0
};


const updateUser = (state, action) => {

    if (state === undefined) {
        return DefaultUser;
    }

    switch (action.type) {
        case 'SET_DEFAULT_USER':
            return {
                id: null,
                isAuthenticated: false,
                token: null,
                fullName: '',
                email: '',
                phone: '',
                bonuses: 0
            };

        case 'SET_USER_DATA':
            const {id, token, fullName, email, phone, bonuses} = action.payload;
            return {
                id, token, fullName, email, phone, bonuses,
                isAuthenticated: true,

            };

        case 'UPDATE_USER':
            return DefaultUser;

        default:
            return state.user;
    }
};

export default updateUser;