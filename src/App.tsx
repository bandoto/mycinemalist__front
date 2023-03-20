import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom";
import {useAppDispatch} from "./hooks/hooks";
import {useEffect} from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import CinemaPage from "./pages/CinemasPage/CinemaPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import {CinemaSingle} from "./modules/CinemaList";
import {getMe} from "./modules/AuthForm";

const App = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<CinemaPage />}></Route>
                    <Route path='/login' element={<AuthPage />}></Route>
                    <Route path='/registration' element={<AuthPage />}></Route>
                    <Route path='/cinema/:id' element={<CinemaSingle />}></Route>
                    <Route path='/profile' element={<ProfilePage />}></Route>
                </Routes>
            </main>
        </div>
    );
};

export default App;