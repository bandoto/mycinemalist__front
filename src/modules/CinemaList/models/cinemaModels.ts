import {NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING} from "../utils/consts";

export interface CinemaResponse<T> {
    page: number,
    results: T[],
    total_results: number,
    total_pages: number,
    dates?: Dates
}

export interface Dates {
    maximum: string,
    minimum: string
}

export interface Cinema {
    cinemaNumber: number,
    name: string,
    description: string,
    image: string,
    date: string,
    language: string,
    rate: number
}

export interface getAllCinemasProps {
    page: number,
    tag: string
}

export type Tag = typeof POPULAR | typeof TOP_RATED | typeof NOW_PLAYING | typeof UPCOMING