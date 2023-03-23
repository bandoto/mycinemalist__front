import {Cinema} from "../../models/cinemaModels";
import {HOST_LINK_IMAGE} from "../../../../utils/consts";
import {Link} from "react-router-dom";
import {ellipsis} from "../../../../helpers/ellipsis";

import './CinemaItem.scss'

const CinemaItem = (cinema: Cinema)=> {
    return (
        <div className="cinemas__item item-cinema">
            <Link to={`cinema/${cinema.cinemaNumber}`} className="item-cinema__image">
                <img src={HOST_LINK_IMAGE + cinema.image} alt=""/>
            </Link>
            <Link to={`cinema/${cinema.cinemaNumber}`} title={cinema.name} className="item-cinema__name">{ellipsis(cinema.name, 30)}</Link>
            <div className="item-cinema__info">
                <span className='item-cinema__rate'>{cinema.rate}</span>
                <span className='item-cinema__date'>{cinema.date?.split('-')[0]}</span>
            </div>
        </div>
    );
};

export default CinemaItem;