export default class ApiService {

    _baseUrl = 'https://www.api.ddfood.ru/';
    DaDataToken = '7aade7b140b178545c97596e3f7c0dc5e79448bb';
    // _baseUrl = 'http://localhost:8000/';

    getData = async (url) => {
        const result = await fetch(`${this._baseUrl}${url}`);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, received ${result.status}`);
        }
        return await result.json();
    };

    getMainData = async () => {
        const result = await this.getData('shop/');
        return result
    };

    getClientIP = async () => {
        const result = await fetch('https://api.ipify.org?format=json');
        return await result.json();
    };

    getClientCity = async (ip) => {
        const result = await fetch(
            `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Token ${this.DaDataToken}`
                },
            }
        );
        return await result.json()
    };

    getCity = async (city_id) => {
        const result = await this.getData(`city/${city_id}`);
        return this.mapCityData(result);
    };


    getCityData = async () => {
        this.getClientIP()
            .then((result) => {
                this.getClientCity(result.ip)
                    .then((city_id) => {
                        if (city_id.location !== null) {
                            this.getCity(city_id.location.data.region_iso_code)
                                .then((result) => {
                                    this.mapCityData(result);
                                })
                        }
                    })
            })
    };

    mapCityData = (cityData) => {
        const {
            name, query_id, address, phone, working_time,
            delivery_info, minimal_price_for_delivery,
            delivery_price, is_self_delivery, self_delivery_info
        } = cityData;
        return {
            name,
            city_id: query_id,
            address,
            phone,
            workingTime: working_time,
            deliveryInfo: delivery_info,
            minimalPriceForDelivery: minimal_price_for_delivery,
            deliveryPrice: delivery_price,
            isSelfDelivery: is_self_delivery,
            selfDeliveryInfo: self_delivery_info
        }
    };


//     const apiService = new ApiService();
//     apiService.getCLientIP()
// .then((result) => {
//     IP_loaded(result.ip);
//     console.log(result.ip);
//     apiService.getCLientCity(result.ip)
// .then((city_id) => {
//     console.log(city_id);
//     if (city_id.location !== null) {
//     apiService.getCityData(city_id.location.data.region_iso_code)
// .then((cityData) => {
//     console.log(cityData)
// });
// } else {
//     console.log('City is undefined')
// }

    getCategoriesList = async () => {
        const result = await this.getData('catalog/category/');
        return result
    }

}