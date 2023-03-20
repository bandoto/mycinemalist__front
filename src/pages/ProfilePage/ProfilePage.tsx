import React from 'react';
import {Container} from "../../UI/Container/Container";
import {ProfileTable} from "../../modules/ProfileUser";

import './ProfilePage.scss'

const ProfilePage = () => {
    return (
        <section className='profile'>
            <Container>
                <ProfileTable />
            </Container>
        </section>
    );
};

export default ProfilePage;