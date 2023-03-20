import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {useEffect} from "react";
import {addCinemaToFavorite, getCinema} from "../../api/cinemasSlice";
import {useParams} from "react-router-dom";
import {Container} from "../../../../UI/Container/Container";
import {HOST_LINK_IMAGE} from "../../../../utils/consts";

import './CinemaSingle.scss'
import H1 from "../../../../UI/H1/H1";
import Loader from "../../../../components/Loader/Loader";

export const CinemaSingle = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {singleCinema, isLoading} = useAppSelector(state => state.cinemas)

    useEffect(() => {
        dispatch(getCinema(Number(params.id)))
    }, [])

    const addCinemaToFavoriteHandler = (id?: number) => {
        if (id) {
            dispatch(addCinemaToFavorite(id))
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
                            <button onClick={() => addCinemaToFavoriteHandler(singleCinema?.cinemaNumber)}>Додати в мій список</button>
                            <div className="cinema__description">Опис фільму: {singleCinema?.description}</div>
                        </>
                }
            </Container>
        </div>
    );
};
