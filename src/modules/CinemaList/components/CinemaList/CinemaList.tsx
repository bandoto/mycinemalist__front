import React, {useEffect} from 'react';
import {Container} from "../../../../UI/Container/Container";

import './CinemaList.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {fetchingCinemas, getAllCinemas} from "../../api/cinemas/cinemasSlice";
import CinemaItem from "../../../../components/CinemaItem/CinemaItem";

export const CinemaList = () => {

    const dispatch = useAppDispatch()
    const {cinemas, fetching, page, tag} = useAppSelector(state => state.cinemas)

    useEffect(() => {
        if (fetching) {
            dispatch(getAllCinemas({page, tag}))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])

    const scrollHandler: EventListener = (e: Event) => {
        const target = e.currentTarget as Document;
        if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100) {
            dispatch(fetchingCinemas())
        }
    }

    return (
        <section className='cinemas'>
            <Container>
                <div className="cinemas__tag">Popular</div>
                <div className="cinemas__list">
                    {cinemas?.map(cinema => (
                        <CinemaItem key={cinema.cinemaNumber} {...cinema} />
                    ))}
                </div>
            </Container>
        </section>
    );
};