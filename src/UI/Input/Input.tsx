import React, {ChangeEvent, FC, MouseEventHandler} from "react";
import "./Input.scss";

interface InputProps {
    type: string;
    placeholder: string;
    classes?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input: FC<InputProps> = ({type, placeholder, classes, onChange, value}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classes ? classes + " " + "input" : "input"}
            onChange={onChange}
            value={value}
        />
    );
};

export default Input;
