const defaultCity = {
    name: 'Samara',
    query_id: null,
    address: null,
    phone: null,
    working_time: null,
    delivery_info: null,
    minimal_price_for_delivery: 0,
    delivery_price: null,
    is_self_delivery: false,
    self_delivery_info: null
};


const updateCity = (state, action) => {

        if (state === undefined) {
            return defaultCity;
        }

        switch (action.type) {

            case 'FETCH_CITY_REQUEST':
                return {
                    name: 'Smara',
                    query_id: null,
                    address: null,
                    phone: null,
                    working_time: null,
                    delivery_info: null,
                    minimal_price_for_delivery: 0,
                    delivery_price: null,
                    is_self_delivery: false,
                    self_delivery_info: null
                };

            case 'FETCH_CITY_SUCCESS':
                // const {name} = action.payload;
                return {
                    name: 'Moscow',
                    query_id: null,
                    address: null,
                    phone: null,
                    working_time: null,
                    delivery_info: null,
                    minimal_price_for_delivery: 0,
                    delivery_price: null,
                    is_self_delivery: false,
                    self_delivery_info: null
                };


            default:
                return state.city
        }


    }
;

export default updateCity;