import './Button.scss'
import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    primary?: boolean;
    danger?: boolean
}

const Button = ({children, onClick, primary, danger}: ButtonProps) => {
    return <button className={(primary ? 'primary-btn' : 'danger-btn') + ' ' + 'main-button'} onClick={onClick}>{children}</button>
};

export default Button;