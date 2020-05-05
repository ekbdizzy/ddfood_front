import siteConfig from "../config";

class OrderApiServices {


    postCreateOrder = async (body) => {
        const result = await fetch(`${siteConfig.urls.baseUrl}${siteConfig.urls.createOrderUrl}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        );
        return await result.json()
    }
}


export default OrderApiServices;