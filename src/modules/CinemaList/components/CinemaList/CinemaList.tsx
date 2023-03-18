import React, {useEffect} from 'react';
import './CinemaList.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {fetchingCinemas, getAllCinemas} from "../../api/cinemas/cinemasSlice";
import CinemaItem from "../../../../components/CinemaItem/CinemaItem";
import CinemaHeader from "../CinemaHeader/CinemaHeader";
import H1 from "../../../../UI/H1/H1";
import Loader from "../../../../components/Loader/Loader";

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
        <>
            <H1>{tag}</H1>
            <div className="cinemas__body">
                <div className="cinemas__main">
                    <div className="cinemas__list">
                        {cinemas?.map(cinema => (
                            <CinemaItem key={cinema.cinemaNumber} {...cinema} />
                        ))}
                    </div>
                    {fetching ? <Loader /> : null}
                </div>
                <CinemaHeader />
            </div>
        </>
    );
};