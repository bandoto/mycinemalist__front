import React, {FC} from 'react';

import './LoginInput.scss'

interface LoginInputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string,
    text: string
}

const LoginInput: FC<LoginInputProps> = ({value, onChange, type, text}) => {

    return (
        <div className='form__label'>
            <span>{text}</span>
            <input value={value} onChange={onChange} type={type} className="form__input"/>
        </div>
    );
};

export default LoginInput;