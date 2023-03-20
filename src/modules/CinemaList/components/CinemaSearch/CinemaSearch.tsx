import React, {ChangeEvent, useEffect, useState} from "react";
import Input from "../../../../UI/Input/Input";
import "./CinemaSearch.scss";
import {useDebounce} from "../../hooks/useDebounce";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {getCinemaByName} from "../../api/cinemasSlice";
import {HOST_LINK_IMAGE} from "../../../../utils/consts";
import {Link} from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";

export const CinemaSearch = () => {

    const [search, setSearch] = useState('')
    const [dropDown, setDropDown] = useState(false)
    const debounced = useDebounce(search)

    const {searchCinemas, isLoading} = useAppSelector(state => state.cinemas)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (debounced.length > 3) {
            dispatch(getCinemaByName(search))
        }
    }, [debounced])

    useEffect(() => {
        setDropDown(debounced.length > 3 && searchCinemas?.length > 0)
    }, [debounced, searchCinemas])

    return (
        <div className="cinemas__search search-cinemas">
            <Input
                type="text"
                placeholder="Введіть назву фільму..."
                classes="search-cinema__input"
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
            {dropDown && <div className="search-cinema__results results-search">

                <ul className="results-search__list">
                    {isLoading && <Loader />}
                    {
                        searchCinemas?.map(cinema => (
                            <li key={cinema.cinemaNumber} className='results-search__item'>
                                <Link to={`cinema/${cinema.cinemaNumber}`} className='results-search__link'>
                                    <div className='results-search__image'>
                                        <img src={HOST_LINK_IMAGE + cinema.image} alt=""/>
                                    </div>
                                    <div className='results-search__info'>
                                        <span>{cinema.name}</span>
                                        <span>Оцінка - {cinema.rate}</span>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>}
        </div>
    );
};

