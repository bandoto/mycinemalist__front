import React from 'react';
import './CinemaHeader.scss'

const CinemaHeader = () => {
    return (
        <div className='cinemas__header header-cinemas'>
            <nav className='header-cinemas__menu'>
                <div className="header-cinemas__sort">
                    <h1 className='header-cinemas__title'>Статус</h1>
                    <ul className="header-cinemas__list">
                        <li className='active'>
                            <a href="">Popular</a>
                        </li>
                        <li>
                            <a href="">Top Rated</a>
                        </li>
                    </ul>
                </div>
                <div className="header-cinemas__sort">
                    <h1 className='header-cinemas__title'>Сортування</h1>
                    <ul className="header-cinemas__list">
                        <li className='active'>
                            <a href="">Popular</a>
                        </li>
                        <li>
                            <a href="">Top Rated</a>
                        </li>
                    </ul>
                </div>
                <div className="header-cinemas__sort">
                    <h1 className='header-cinemas__title'>Рік</h1>
                    <ul className="header-cinemas__list">
                        <li className='active'>
                            <a href="">Popular</a>
                        </li>
                        <li>
                            <a href="">Top Rated</a>
                        </li>
                    </ul>
                </div>
                <div className="header-cinemas__sort">
                    <h1 className='header-cinemas__title'>Жанри</h1>
                    <ul className="header-cinemas__list">
                        <li className='active'>
                            <a href="">Popular</a>
                        </li>
                        <li>
                            <a href="">Top Rated</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default CinemaHeader;