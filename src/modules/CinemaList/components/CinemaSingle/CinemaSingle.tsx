import CinemaItem from "../../../../components/CinemaItem/CinemaItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {useEffect} from "react";
import {getCinema} from "../../api/cinemas/cinemasSlice";
import {useParams} from "react-router-dom";

const CinemaSingle = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {singleCinema, isLoading} = useAppSelector(state => state.cinemas)

    useEffect(() => {
        dispatch(getCinema(Number(params.id)))
    }, [])

    return (
        <div>
            {isLoading ? <h1>Loading</h1> : singleCinema?.name}
        </div>
    );
};

export default CinemaSingle;