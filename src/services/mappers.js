import siteConfig from "../config";

const mapProductData = (productData) => {
    const {
        id, name, slug, article, categories, trade_mark, mass, measure,
        contain, protein, carbs, fat, fibers, energy_value_calories,
        bread_ones, krahmal, dry_milk, kletchatka, isolat, gluten, inulin, dukan_phase,
        base_image, best_before, price, sale, promo
    } = productData;

    return {
        id, name, slug, article, categories, mass, measure,
        contain, protein, fat, carbs, fibers, price, sale, promo,
        krahmal, kletchatka, isolat, gluten, inulin,
        energyValueCalories: energy_value_calories,
        breadOnes: bread_ones,
        dryMilk: dry_milk,
        dukanPhases: dukan_phase,
        tradeMark: trade_mark.name,
        baseImage: base_image ? `${siteConfig.urls.baseUrl}${base_image}` : null,
        bestBefore: best_before
    }
};


const mapCityData = (cityData) => {
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


export {
    mapProductData,
    mapCityData,
}