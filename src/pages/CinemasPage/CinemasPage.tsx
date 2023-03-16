import {CinemaList, CinemaSearch} from "../../modules/CinemaList";
import {Container} from "../../UI/Container/Container";

const CinemasPage = () => {
    return (
        <section className='cinemas'>
            <Container>
                <CinemaSearch />
                <CinemaList />
            </Container>
        </section>
    );
};

export default CinemasPage;