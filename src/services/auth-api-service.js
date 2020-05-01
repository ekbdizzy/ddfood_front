import siteConfig from "../config";
import header from "../components/header/header";


class AuthApiService {

    obtainToken = async (data) => {
        const result = await fetch(
            `${siteConfig.urls.baseUrl}/user/obtain_token/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            });
        return await result.json()
    };

    getUserData = async (token) => {
        const result = await fetch(
            `${siteConfig.urls.baseUrl}/user/update/`,
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
        return await result.json()
    };

    createUser = async (body) => {
        const result = await fetch(
            `${siteConfig.urls.baseUrl}/user/create/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            });
        return await result.json()
    }
}

export default AuthApiService;