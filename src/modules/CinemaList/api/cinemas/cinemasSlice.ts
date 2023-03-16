import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../../utils/axios";
import {Cinema, getAllCinemasProps, Tag} from "../models/cinemaModels";

interface cinemasState {
    isLoading: boolean
    cinemas: Cinema[]
    singleCinema: Cinema | null
    fetching: boolean
    page: number
    tag: Tag
}

const initialState: cinemasState = {
    isLoading: false,
    cinemas: [],
    singleCinema: null,
    fetching: true,
    page: 1,
    tag: 'popular'
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

export const getCinema = createAsyncThunk<Cinema, number>(
    'cinemas/getCinema',
    async (id) => {
        try {
            const { data } = await axios.get(`/cinemas/movieId/${id}`)
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
        fetchingCinemas: (state) => {
            state.fetching = true
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setTag: (state, action) => {
            state.tag = action.payload
            state.fetching = true
            state.cinemas = []
            state.page = 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCinemas.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllCinemas.fulfilled, (state, action) => {
                state.isLoading = false
                state.cinemas = [...state.cinemas, ...action.payload]
                state.fetching = false
                state.page = state.page + 1
            })
            .addCase(getAllCinemas.rejected, (state, action) => {
                state.isLoading = false
            })

            .addCase(getCinema.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCinema.fulfilled, (state, action) => {
                state.isLoading = false
                state.singleCinema = action.payload
            })
            .addCase(getCinema.rejected, (state, action) => {
                state.isLoading = false
            })
    }
})

export const {fetchingCinemas, setTag} = cinemasSlice.actions;
export default cinemasSlice.reducer;
