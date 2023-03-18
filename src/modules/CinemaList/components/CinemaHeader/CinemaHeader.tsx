import React from "react";
import "./CinemaHeader.scss";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING} from "../../utils/consts";
import {setTag} from "../../api/cinemas/cinemasSlice";
import {Tag} from "../../models/cinemaModels";

const CinemaHeader = () => {
    const dispatch = useAppDispatch();
    const {tag} = useAppSelector((state) => state.cinemas);

    const isStatusTag = (tag: Tag) => {
        dispatch(setTag(tag));
    };

    return (
        <div className="cinemas__header header-cinemas">
            <nav className="header-cinemas__menu">
                <div className="header-cinemas__sort">
                    <h1 className="header-cinemas__title">Статус</h1>
                    <ul className="header-cinemas__list">
                        <li className={tag === POPULAR ? "active" : ""}>
                            <span onClick={() => isStatusTag(POPULAR)}>Популярні</span>
                        </li>
                        <li className={tag === TOP_RATED ? "active" : ""}>
                            <span onClick={() => isStatusTag(TOP_RATED)}>Рейтингові</span>
                        </li>
                        <li className={tag === UPCOMING ? "active" : ""}>
                            <span onClick={() => isStatusTag(UPCOMING)}>Очікувані</span>
                        </li>
                        <li className={tag === NOW_PLAYING ? "active" : ""}>
                            <span onClick={() => isStatusTag(NOW_PLAYING)}>
                                Зараз в ефірі
                            </span>
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
