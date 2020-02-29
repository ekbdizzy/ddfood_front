import siteConfig from "../config";

export default class ApiService {

    _baseUrl = siteConfig.urls.baseUrl;
    DaDataToken = siteConfig.tokens.DaDataToken;

    getData = async (url) => {
        const result = await fetch(`${this._baseUrl}${url}`);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, received ${result.status}`);
        }
        return await result.json();
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


}