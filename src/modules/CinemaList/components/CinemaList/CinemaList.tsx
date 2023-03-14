import React, {useEffect, useState} from 'react';
import {Container} from "../../../../UI/Container/Container";

import './CinemaList.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {getAllCinemas} from "../../api/cinemas/cinemasSlice";
import CinemaItem from "../../../../components/CinemaItem/CinemaItem";

export const CinemaList = () => {

    const [page, setPage] = useState(1)
    const [tag, setTag] = useState('popular')

    const dispatch = useAppDispatch()
    const {cinemas} = useAppSelector(state => state.cinemas)

    useEffect(() => {
        dispatch(getAllCinemas({page: page, tag: tag}))
    }, [page, tag])

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