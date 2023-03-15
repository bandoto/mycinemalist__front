import './H1.scss'
import {FC, PropsWithChildren} from "react";

const H1: FC<PropsWithChildren> = ({children}) => {
    return (
        <h1 className='main-title'>{children}</h1>
    );
};

export default H1;