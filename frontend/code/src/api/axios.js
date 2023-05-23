import axios from "axios"
const auth = {
    "Access-Control-Allow-Origin": "*",
};
const apiBaseUrl = "http://43.202.40.53/api/v1/"

const API = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: false,
    timeout: 240000,
});

export { API };