import React, {FC} from 'react';

import './LoginButton.scss'

interface LoginButtonProps {
    text: string,
}

const LoginButton: FC<LoginButtonProps> = ({text}) => {
    return (
        <button type='submit' className='form__button'>
            {text}
        </button>
    );
};

export default LoginButton;