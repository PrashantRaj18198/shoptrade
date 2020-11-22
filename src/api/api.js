import axios from 'axios';
// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

const API = async (url, method = 'get', data = {}) => {

    const transformResponse = (rawData) => {
        const lastIndexofTrailingComma = rawData.lastIndexOf(',');
        const dataAfterRemovingComma = rawData.slice(0, lastIndexofTrailingComma) + rawData.slice(lastIndexofTrailingComma + 1)
        console.log(dataAfterRemovingComma)
        return JSON.parse(dataAfterRemovingComma)
    }

    const config = {
        url,
        method,
        data,
        transformResponse,
        headers: {
            'Content-Type': 'text/plain'
        }
    }
    console.log(config)
    const response = await axios(config);
    if (response.status === 200) {
        console.log(response.data)
        return response.data;
    }
    return new Error(response.statusText);
}

export default API;