const updateIP = (state, action) => {

    if (state === undefined) {
        return {
            ip: null,
            city_id: null
        }
    }
    switch (action.type) {
        case 'FETCH_IP_REQUEST':
            return {
                ip: null,
                city_id: null
            };

        case 'FETCH_IP_SUCCESS':
            return {
                ip: action.payload
            };

        default:
            return state.IPData
    }


    // return {
    //     productsList: action.payload,
    //     loading: false,
    //     error: null
    // };

};

export default updateIP;