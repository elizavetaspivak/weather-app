import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherAPI} from "../dal/api/api";

export const getWeather = createAsyncThunk('weather/getWeather', async (name: string, {dispatch}) => {
    try {
        const res = await weatherAPI.getWeather(name)
        const weather = res.data
        return {weather}
    } catch (error) {
        return error
    }
})

export const slice = createSlice({
    name: 'weather',
    initialState: {weather: {}},
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getWeather.fulfilled, (state, action:any) => {
                state.weather = action.payload.weather
            })
    }
})

export const weatherReducer = slice.reducer