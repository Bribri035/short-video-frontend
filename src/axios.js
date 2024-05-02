import axios from 'axios'

const instance = axios.create({
    baseURL:"https://short-video-app-turner-7348e2e9219e.herokuapp.com/"
})

export default instance