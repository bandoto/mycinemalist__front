import {Cinema} from "../../modules/CinemaList/api/models/cinemaModels";
import {HOST_LINK_IMAGE} from "../../utils/consts";

import './CinemaItem.scss'
import {Link} from "react-router-dom";

const CinemaItem = (cinema: Cinema)=> {
    return (
        <div className="cinemas__item item-cinema">
            <div className="item-cinema__image">
                <img src={HOST_LINK_IMAGE + cinema.image} alt=""/>
            </div>
            <Link to={`${cinema.cinemaNumber}`} className="item-cinema__name">{cinema.name}</Link>
            <div className="item-cinema__description">{cinema.description}</div>
        </div>
    );
};

export default CinemaItem;