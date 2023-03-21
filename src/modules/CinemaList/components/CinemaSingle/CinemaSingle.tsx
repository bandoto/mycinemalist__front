import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {useEffect, useState} from "react";
import {getCinema} from "../../api/cinemasSlice";
import {useParams} from "react-router-dom";
import {Container} from "../../../../UI/Container/Container";
import {HOST_LINK_IMAGE} from "../../../../utils/consts";

import './CinemaSingle.scss'
import H1 from "../../../../UI/H1/H1";
import Loader from "../../../../components/Loader/Loader";
import Button from "../../../../UI/Button/Button";
import {addCinemaToFavorite, deleteCinemaFromFavorite, getMe} from "../../../AuthForm/api/authSlice";

export const CinemaSingle = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {singleCinema, isLoading} = useAppSelector(state => state.cinemas)
    const {user, isLoading: authLoading} = useAppSelector(state => state.auth)

    const [fav, setFav] = useState(false)

    useEffect(() => {
        dispatch(getCinema(Number(params.id)))
    }, [])

    useEffect(() => {
        checkFavoriteCinema(singleCinema?.cinemaNumber)
    }, [singleCinema])

    const checkFavoriteCinema = (id?: number) => {
        if (user?.cinemas.some(cinema => cinema.cinemaNumber === id)) {
            setFav(true)
        } else {
            setFav(false)
        }
    }

    const addCinemaToFavoriteHandler = (id?: number) => {
        if (id) {
            dispatch(addCinemaToFavorite(id))
            setFav(true)
        }
    }

    const deleteCinemaFromFavoriteHandler = (id?: number) => {
        if (id) {
            dispatch(deleteCinemaFromFavorite(id))
            setFav(false)
        }
    }

    return (
        <div className='cinema'>
            <Container>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <H1>{singleCinema?.name}</H1>
                            <div className="cinema__body">
                                <div className="cinema__image">
                                    <img src={HOST_LINK_IMAGE + singleCinema?.image} alt=""/>
                                </div>
                                <div className="cinema__info">
                                    <span>Дата - {singleCinema?.date}</span>
                                    <span>Мова - {singleCinema?.language}</span>
                                    <span>Оцінка - {singleCinema?.rate}</span>
                                </div>
                            </div>
                            {
                                authLoading
                                    ?
                                    <Loader />
                                    :
                                    fav
                                        ?
                                    <Button danger={true} onClick={() => deleteCinemaFromFavoriteHandler(singleCinema?.cinemaNumber)}>Прибрати з списку</Button>
                                        :
                                    <Button primary={true} onClick={() => addCinemaToFavoriteHandler(singleCinema?.cinemaNumber)}>Додати в мій список</Button>

                            }
                            <div className="cinema__description">Опис фільму: {singleCinema?.description}</div>
                        </>
                }
            </Container>
        </div>
    );
};
