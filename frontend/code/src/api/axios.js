import axios from "axios"
const auth = {
    "Access-Control-Allow-Origin": "*",
};
const apiBaseUrl = "https://farofoundation.org/api/v1/"

const API = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: false,
    timeout: 240000,
});

export { API };