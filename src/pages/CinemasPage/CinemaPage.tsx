import {CinemaList, CinemaNav, CinemaSearch} from "../../modules/CinemaList";
import {Container} from "../../UI/Container/Container";

import './CinemaPage.scss'

const CinemaPage = () => {
    return (
        <section className='cinemas'>
            <Container>
                <CinemaSearch />
                <div className="cinemas__body">
                    <CinemaList />
                    <CinemaNav />
                </div>
            </Container>
        </section>
    );
};

export default CinemaPage;