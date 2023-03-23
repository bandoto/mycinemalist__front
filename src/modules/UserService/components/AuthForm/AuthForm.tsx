import React, {FormEvent, useEffect, useState} from 'react';
import {Container} from "../../../../UI/Container/Container";
import LoginInput from "../LoginInput/LoginInput";
import LoginButton from "../LoginButton/LoginButton";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {checkIsAuth, loginUser, registrationUser} from "../../api/authSlice";
import {useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_PAGE_ROUTE} from "../../../../utils/consts";
import {LoginFormRequest, RegistrationFormRequest} from "../../models/authModels";

import './AuthForm.scss'

export const AuthForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {errors, isLoading} = useAppSelector(state => state.auth)
    const isAuth = useAppSelector((checkIsAuth))
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    useEffect(() => {
        if (isAuth) navigate(MAIN_PAGE_ROUTE)
    }, [isAuth])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isLogin) {
            const user: LoginFormRequest = {email, password}
            dispatch(loginUser(user))
        } else {
            const user: RegistrationFormRequest = {username, email, password}
            dispatch(registrationUser(user))
        }
    }

    const renderErrors = (errorArr: string[] | string) => {
        if (typeof errorArr === 'string') {
            return <div className='login__error'>{errorArr}</div>
        } else {
            return errorArr?.map((err, index) => {
                return <div key={index} className='login__error'>{err}</div>
            })
        }
    }

    const error = renderErrors(errors)

    return (
        <section className='login'>
            {
                isLogin
                    ?
                    <Container>
                        <div className="login__title">Увійти</div>
                        <form method='submit' className="login__form form" onSubmit={handleSubmit}>
                            <LoginInput type='email' value={email} onChange={e => setEmail(e.target.value)} text='Email' />
                            <LoginInput type='password' value={password} onChange={e => setPassword(e.target.value)} text='Password' />
                            {isLoading ? <LoginButton text='Loading' /> : <LoginButton text='Увійти' />}
                            {error}
                        </form>
                    </Container>
                    :
                    <Container>
                        <div className="login__title">Регістрація</div>
                        <form method='submit' className="login__form form" onSubmit={handleSubmit}>
                            <LoginInput type='text' value={username} onChange={e => setUsername(e.target.value)} text='Username' />
                            <LoginInput type='email' value={email} onChange={e => setEmail(e.target.value)} text='Email' />
                            <LoginInput type='password' value={password} onChange={e => setPassword(e.target.value)} text='Password' />
                            {isLoading ? <LoginButton text='Loading' /> : <LoginButton text='Регістрація' />}
                            {error}
                        </form>
                    </Container>
            }

        </section>
    );
};

