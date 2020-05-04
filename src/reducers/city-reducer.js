const defaultCity = {
    name: '',
    city_id: null,
    address: null,
    phone: null,
    workingTime: null,
    deliveryInfo: null,
    minimalPriceForDelivery: 0,
    deliveryPrice: null,
    isSelfDelivery: false,
    selfDeliveryInfo: null
};


const updateCity = (state, action) => {

        if (state === undefined) {
            return defaultCity;
        }

        switch (action.type) {

            case 'FETCH_CITY_REQUEST':
                return {
                    name: 'Загрузка',
                    city_id: null,
                    address: null,
                    phone: null,
                    workingTime: null,
                    deliveryInfo: null,
                    minimalPriceForDelivery: 0,
                    deliveryPrice: null,
                    isSelfDelivery: false,
                    selfDeliveryInfo: null
                };


            case 'FETCH_CITY_SUCCESS':
                const {
                    name,
                    city_id,
                    address,
                    phone,
                    workingTime,
                    deliveryInfo,
                    minimalPriceForDelivery,
                    deliveryPrice,
                    isSelfDelivery,
                    selfDeliveryInfo
                } = action.payload;

                return {
                    name,
                    city_id,
                    address,
                    phone,
                    workingTime,
                    deliveryInfo,
                    minimalPriceForDelivery,
                    deliveryPrice,
                    isSelfDelivery,
                    selfDeliveryInfo
                };


            default:
                return state.city
        }


    }
;

export default updateCity;