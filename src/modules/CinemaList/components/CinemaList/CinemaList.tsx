import React, {useEffect} from 'react';
import {Container} from "../../../../UI/Container/Container";

import './CinemaList.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {fetchingCinemas, getAllCinemas} from "../../api/cinemas/cinemasSlice";
import CinemaItem from "../../../../components/CinemaItem/CinemaItem";
import CinemaHeader from "../CinemaHeader/CinemaHeader";
import {useScroll} from "../../hooks/useScroll";
import H1 from "../../../../UI/H1/H1";
import Loader from "../../../../components/Loader/Loader";

export const CinemaList = () => {

    const dispatch = useAppDispatch()
    const {cinemas, fetching, page, tag} = useAppSelector(state => state.cinemas)

    useEffect(() => {
        if (fetching) {
            dispatch(getAllCinemas({page, tag}))
        }
    }, [fetching])

    useScroll(() => dispatch(fetchingCinemas()))

    return (
        <section className='cinemas'>
            <Container>
                <H1>{tag}</H1>
                <div className="cinemas__body">
                    <div className="cinemas__main">
                        <div className="cinemas__list">
                            {cinemas?.map(cinema => (
                                <CinemaItem key={cinema.cinemaNumber} {...cinema} />
                            ))}
                        </div>
                        {fetching && <Loader />}
                    </div>
                    <CinemaHeader />
                </div>
            </Container>
        </section>
    );
};