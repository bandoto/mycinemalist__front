import {HeaderLink} from "../../UI/HeaderLink/HeaderLink";
import {Container} from "../../UI/Container/Container";

import './Header.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {checkIsAuth, logout} from "../../modules/AuthForm";

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
                        {
                            isAuth
                                ?
                                <>
                                    <HeaderLink text='Профіль' href='/profile' />
                                    <HeaderLink text='Вийти' onClick={handleLogout} />
                                </>
                                :
                                <>
                                    <HeaderLink text="Вхід" href='/login' />
                                    <HeaderLink text="Регістрація" href='/registration' />
                                </>
                        }
                    </ul>
                </nav>
            </Container>
        </div>
    );
};

export default Header;