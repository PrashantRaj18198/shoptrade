import axios from 'axios';

const API = async (url, method = 'get', data = {}) => {

    // remove the trailing data
    const transformResponse = (rawData) => {
        const lastIndexofTrailingComma = rawData.lastIndexOf(',');
        const dataAfterRemovingComma = rawData.slice(0, lastIndexofTrailingComma) + rawData.slice(lastIndexofTrailingComma + 1)
        console.log(dataAfterRemovingComma)
        return JSON.parse(dataAfterRemovingComma)
    }

    // create axios configuration
    const config = {
        url,
        method,
        data,
        transformResponse,
        headers: {
            'Content-Type': 'text/plain'
        }
    }
    
    const response = await axios(config);
    // request successfull
    if (response.status === 200) {
        return response.data;
    }
    // request failed raise and return error - thunk handles this
    return new Error(response.statusText);
}

export default API;