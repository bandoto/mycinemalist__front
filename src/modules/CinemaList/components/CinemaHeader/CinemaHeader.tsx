import React from 'react';
import './CinemaHeader.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {POPULAR, TOP_RATED} from "../../utils/consts";
import {setTag} from "../../api/cinemas/cinemasSlice";

const CinemaHeader = () => {

    const dispatch = useAppDispatch()
    const {tag} = useAppSelector(state => state.cinemas)

    const isPopularTag = () => {
        dispatch(setTag(POPULAR))
    }

    const isTopRatedTag = () => {
        dispatch(setTag(TOP_RATED))
    }

    return (
        <div className='cinemas__header header-cinemas'>
            <nav className='header-cinemas__menu'>
                <div className="header-cinemas__sort">
                    <h1 className='header-cinemas__title'>Статус</h1>
                    <ul className="header-cinemas__list">
                        <li className={tag === POPULAR ? 'active' : ''}>
                            <span onClick={isPopularTag}>Popular</span>
                        </li>
                        <li className={tag === TOP_RATED ? 'active' : ''}>
                            <span onClick={isTopRatedTag}>Top Rated</span>
                        </li>
                    </ul>
                </div>
                {/*<div className="header-cinemas__sort">*/}
                {/*    <h1 className='header-cinemas__title'>Сортування</h1>*/}
                {/*    <ul className="header-cinemas__list">*/}
                {/*        <li className='active'>*/}
                {/*            <a href="">Popular</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="">Top Rated</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                {/*<div className="header-cinemas__sort">*/}
                {/*    <h1 className='header-cinemas__title'>Рік</h1>*/}
                {/*    <ul className="header-cinemas__list">*/}
                {/*        <li className='active'>*/}
                {/*            <a href="">Popular</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="">Top Rated</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                {/*<div className="header-cinemas__sort">*/}
                {/*    <h1 className='header-cinemas__title'>Жанри</h1>*/}
                {/*    <ul className="header-cinemas__list">*/}
                {/*        <li className='active'>*/}
                {/*            <a href="">Popular</a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a href="">Top Rated</a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </nav>
        </div>
    );
};

export default CinemaHeader;