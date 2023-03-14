import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface HeaderLinkProps {
    href?: string,
    text: string,
    onClick?: () => void
}

export const HeaderLink: FC<HeaderLinkProps> = ({href= '#', text, onClick}) => {
    return (
        <li>
            <Link to={href} onClick={onClick} className='header__link'>{text}</Link>
        </li>
    );
};

