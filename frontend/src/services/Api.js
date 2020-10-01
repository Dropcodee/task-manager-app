import axios from 'axios'

export default () => {
    const api = axios.create({
        baseURL: process.env.VUE_APP_API_ENDPOINT
    });
    api.interceptors.request.use(config => {
        NProgress.start()
        return config
    })
    api.interceptors.response.use(response => {
        NProgress.done()
        return response
    })
    return api;
}