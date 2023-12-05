import { Request } from "express";

const USER_API_URL = 'http://localhost:8001';
const VIDEO_API_URL = 'http://localhost:8002';


const getUrl = (req: Request) => {
    const parts = req.url.split('?');
    const partsUrl = req.baseUrl.split('/');
    const baseUrl = req.baseUrl.replace("/" + partsUrl[1], '');

    const queryString = parts[1];
    const updatedPath = parts[0];
    return baseUrl + updatedPath + (queryString ? '?' + queryString : '')
}

const getHost = (req: Request) => {
    if (req.baseUrl.match('/videoservice')) {
        return VIDEO_API_URL;
    } else if (req.baseUrl.match('/userservice')) {
        return USER_API_URL;
    }
    else {
        return ''
    }
}

export { getHost, getUrl }