import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {fetchingCinemas, getAllCinemas} from "../../api/cinemasSlice";
import CinemaItem from "../CinemaItem/CinemaItem";
import Loader from "../../../../components/Loader/Loader";

import './CinemaList.scss';

export const CinemaList = () => {

    const dispatch = useAppDispatch()
    const {cinemas, fetching, page, tag, totalResults} = useAppSelector(state => state.cinemas)

    useEffect(() => {
        if (fetching) {
            dispatch(getAllCinemas({page, tag}))
        }
    }, [fetching, tag, page])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [cinemas])

    const scrollHandler: EventListener = (e: Event) => {
        const target = e.currentTarget as Document;

        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100
            && cinemas.length < totalResults) {
            dispatch(fetchingCinemas())
        }
    }

    return (
        <div className="cinemas__main main-cinemas">
            <div className="main-cinemas__list">
                {cinemas?.map(cinema => (
                    <CinemaItem key={cinema.cinemaNumber} {...cinema} />
                ))}
            </div>
            {fetching ? <Loader /> : null}
        </div>
    );
};