import { configureStore } from '@reduxjs/toolkit';
import {authSlice} from "../modules/UserService";
import {cinemasSlice} from "../modules/CinemaList";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cinemas: cinemasSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
