
const cityRequested = () => {
    return {
        type: 'FETCH_CITY_REQUEST',
        payload: {}
    }
};

const cityLoaded = (city_id) => {
    return {
        type: 'FETCH_CITY_SUCCESS',
        payload: city_id
    }
};

export {
    cityRequested,
    cityLoaded
}