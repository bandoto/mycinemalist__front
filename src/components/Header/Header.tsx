import {HeaderLink} from "../../UI/HeaderLink/HeaderLink";
import {Container} from "../../UI/Container/Container";

import './Header.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {checkIsAuth, logout} from "../../modules/UserService";
import {LOGIN_ROUTE, MAIN_PAGE_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const Header = () => {

    const isAuth = useAppSelector(checkIsAuth)
    const {isLoading} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }

    return (
        <div className='header'>
            <Container>
                <div className="header__logo"></div>
                <nav className="header__menu">
                    <ul className="header__list">
                        <HeaderLink text='Головна' href={MAIN_PAGE_ROUTE} />
                        {
                            isAuth
                                ?
                                <>
                                    <HeaderLink text='Профіль' href={PROFILE_ROUTE} />
                                    <HeaderLink text='Вийти' onClick={handleLogout} />
                                </>
                                :
                                <>
                                    <HeaderLink text="Вхід" href={LOGIN_ROUTE} />
                                    <HeaderLink text="Регістрація" href={REGISTRATION_ROUTE} />
                                </>
                        }
                    </ul>
                </nav>
            </Container>
        </div>
    );
};

export default Header;