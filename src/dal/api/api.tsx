import React from 'react'
import axios from "axios";

const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
const REACT_APP_API_KEY = '6e33235518f293531848fa88b54c2e2a'

const instance = axios.create({
    baseURL: REACT_APP_API_URL
})

export const weatherAPI = {
    getWeather(name: string) {
        return instance.get(`/weather?q=${name}&appid=${REACT_APP_API_KEY}`);
    },

}


