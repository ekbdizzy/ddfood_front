import siteConfig from "../config";


export default class SearchApiService {

    searchProducts = async (search) => {
        const {baseUrl, searchProductsUrl} = siteConfig.urls;
        const result = await fetch(`${baseUrl}${searchProductsUrl}?search=${search}`,
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );
        return await result.json()
    }
}