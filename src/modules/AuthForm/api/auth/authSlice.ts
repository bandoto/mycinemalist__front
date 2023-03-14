import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../../utils/axios";
import {RootState} from "../../../../store/store";
import {getMeResponse, KnownError, CreateUser, errorType} from '../models/authApiModels'
import {AxiosError} from "axios";

interface authState {
    user: {},
    token: string,
    isLoading: boolean,
    errors: string[] | string,
}

const initialState: authState = {
    user: {},
    token: '',
    isLoading: false,
    errors: ''
}

export const registrationUser = createAsyncThunk<getMeResponse, CreateUser, {rejectValue: errorType}>(
    'auth/registrationUser',
    async ({username, email, password}, {rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/registration', {
                username,
                email,
                password
            })

            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }

            return data
        } catch (err) {
            const error: AxiosError<KnownError> = err as any;
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
)

export const loginUser = createAsyncThunk<getMeResponse, CreateUser, {rejectValue: errorType}>(
    'auth/loginUser',
    async ({username, email, password}, {rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                username,
                email,
                password
            })

            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }

            return data
        } catch (err) {
            const error: AxiosError<KnownError> = err as any;
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
)

export const getMe = createAsyncThunk<getMeResponse, undefined, {rejectValue: errorType}>(
    'auth/getMe',
    async (_, {rejectWithValue }) => {
        try {
            const { data } = await axios.get('/auth/me')
            return data
        } catch (err) {
            const error: AxiosError<KnownError> = err as any;
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {}
            state.token = ''
            state.isLoading = false
            state.errors = []
        }
    },
    extraReducers: (builder) => {
        builder
        // Register
            .addCase(registrationUser.pending, (state) => {
                state.isLoading = true
                state.errors = []
            })
            .addCase(registrationUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(registrationUser.rejected, (state, action) => {
                state.errors = action.payload?.message!
                state.isLoading = false
            })
            // Login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.errors = []
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.token = action.payload.token

            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action.payload?.message)
                state.errors = action.payload?.message!
                state.isLoading = false
            })
            // getMe
            .addCase(getMe.pending, (state) => {
                state.isLoading = true
                state.errors = []
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.user
                state.token = action.payload.token
            })
            .addCase(getMe.rejected, (state, action) => {
                console.log(action.payload?.message)
                state.errors = action.payload?.message!
                state.isLoading = false
            })
    }
})

export const checkIsAuth = (state: RootState) => Boolean(state.auth.token)

export const {logout} = authSlice.actions;
export default authSlice.reducer;
