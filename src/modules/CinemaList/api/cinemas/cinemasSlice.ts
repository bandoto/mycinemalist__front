import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../../utils/axios";
import {Cinema, getAllCinemasProps} from "../models/cinemaModels";

interface cinemasState {
    isLoading: boolean
    cinemas: Cinema[]
}

const initialState: cinemasState = {
    isLoading: false,
    cinemas: []
}

export const getAllCinemas = createAsyncThunk<Cinema[], getAllCinemasProps>(
    'cinemas/getAllCinemas',
    async ({page, tag}) => {
        try {
            const { data } = await axios.get(`/cinemas?page=${page}&tag=${tag}`)
            return data
        } catch (e) {
            console.log(e)
        }
    }
)

export const cinemasSlice = createSlice({
    name: 'cinemas',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCinemas.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllCinemas.fulfilled, (state, action) => {
                state.isLoading = false
                state.cinemas = action.payload
            })
            .addCase(getAllCinemas.rejected, (state, action) => {
                state.isLoading = false
            })
    }
})

export const {} = cinemasSlice.actions;
export default cinemasSlice.reducer;
