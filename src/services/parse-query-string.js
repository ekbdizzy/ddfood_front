const parseQueryString = (queryString) => {
    let data = queryString.replace('?', '').split("&");
    let kwargs = {};
    data.forEach((pair) => {
        const [key, value] = pair.split('=');
        kwargs[key] = value;
    });
    return kwargs
};

export default parseQueryString;