import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {Cinema, CinemaResponse, getAllCinemasProps, Tag} from "../models/cinemaModels";
import {POPULAR} from "../utils/consts";

interface cinemasState {
    isLoading: boolean
    cinemas: Cinema[]
    singleCinema: Cinema | null
    searchCinemas: Cinema[]
    fetching: boolean
    page: number
    tag: Tag
    totalPages: number
    totalResults: number
}

const initialState: cinemasState = {
    isLoading: false,
    cinemas: [],
    singleCinema: null,
    searchCinemas: [],
    fetching: true,
    page: 1,
    tag: POPULAR,
    totalPages: 0,
    totalResults: 0
}

export const getAllCinemas = createAsyncThunk<CinemaResponse<Cinema>, getAllCinemasProps>(
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

export const getCinemaByName = createAsyncThunk<CinemaResponse<Cinema>, string>(
    'cinemas/getCinemaByName',
    async (cinemaName) => {
        try {
            const { data } = await axios.get(`/cinemas/search/${cinemaName}`)
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
            // getAllCinemas
            .addCase(getAllCinemas.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getAllCinemas.fulfilled, (state, action) => {
                state.totalPages = action.payload.total_pages
                state.totalResults = action.payload.total_results
                state.isLoading = false
                state.cinemas = [...state.cinemas, ...action.payload.results]
                state.fetching = false
                state.page = state.page + 1
            })
            .addCase(getAllCinemas.rejected, (state, action) => {
                state.isLoading = false
            })
            // getCinema
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
            // getCinemaByName
            .addCase(getCinemaByName.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getCinemaByName.fulfilled, (state, action) => {
                state.isLoading = false
                state.searchCinemas = action.payload.results
                state.fetching = false
                // state.page = state.page + 1
            })
            .addCase(getCinemaByName.rejected, (state, action) => {
                state.isLoading = false
            })

    }
})

export const {fetchingCinemas, setTag} = cinemasSlice.actions;
export default cinemasSlice.reducer;
