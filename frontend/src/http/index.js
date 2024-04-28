import axios from "axios";

const $host = axios.create({
    baseURL: "http://192.168.254.101",
})

export default $host;