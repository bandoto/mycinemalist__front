import React, {useEffect} from 'react';
import {Container} from "../../../../UI/Container/Container";

import './CinemaList.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {fetchingCinemas, getAllCinemas, setTag} from "../../api/cinemas/cinemasSlice";
import CinemaItem from "../../../../components/CinemaItem/CinemaItem";
import CinemaHeader from "../CinemaHeader/CinemaHeader";
import {useScroll} from "../../hooks/useScroll";
import H1 from "../../../../UI/H1/H1";
import Loader from "../../../../components/Loader/Loader";
import {TOP_RATED} from "../../utils/consts";

export const CinemaList = () => {

    const dispatch = useAppDispatch()
    const {cinemas, fetching, page, tag} = useAppSelector(state => state.cinemas)

    useEffect(() => {
        if (fetching) {
            dispatch(getAllCinemas({page, tag}))
        }
    }, [fetching, tag])

    const scroll = useScroll(() => dispatch(fetchingCinemas()))

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
                    {<Loader />}
                </div>
                <CinemaHeader />
            </div>
        </>
    );
};