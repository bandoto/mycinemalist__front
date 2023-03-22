import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import H1 from "../../../../UI/H1/H1";
import {getMe} from "../../../UserService";
import Loader from "../../../../components/Loader/Loader";
import {Link} from "react-router-dom";

import './ProfileTable.scss'

export const ProfileTable = () => {

    const {user, isLoading} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [])

    return (
        <div className='profile__body'>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <>
                        <H1>Привіт {user?.username}</H1>
                        <div className="profile__fav">
                            <H1>Мій список фільмів</H1>
                            <div className='profile__list'>
                                {
                                    user?.cinemas && user?.cinemas.length > 0
                                        ?
                                    user.cinemas.map((cinema, index) => (
                                        <div key={cinema.cinemaNumber} className='profile__link'>
                                            <Link to={`/cinema/${cinema.cinemaNumber}`}>{index + 1}. {cinema.name}</Link>
                                            <span>Дата - {cinema.date}</span>
                                            <span>Оцінка - {cinema.rate}</span>
                                        </div>
                                    ))
                                        :
                                    <H1>Немає фільмів :(</H1>
                                }
                            </div>
                        </div>
                    </>
            }

        </div>
    );
};

