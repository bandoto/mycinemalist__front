import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom";
import {useAppDispatch} from "./hooks/hooks";
import {getMe} from "./modules/AuthForm";
import {useEffect} from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import CinemasPage from "./pages/CinemasPage/CinemasPage";

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
                    <Route path='/' element={<CinemasPage />}></Route>
                    <Route path='/login' element={<AuthPage />}></Route>
                    <Route path='/registration' element={<AuthPage />}></Route>
                </Routes>
            </main>
        </div>
    );
};

export default App;