import React from 'react'
import { CarsorWidget } from './layout/CarsorWidget'
import { Footer } from './layout/Footer'
import { HomeWidget } from './layout/HomeWidget'
import { Nav } from './layout/Nav'

export const HomePage = () => {

    return (
        <>
            <Nav />
            <div class="container mt-5">
                <HomeWidget title="BEST HOTEL SYSTEM" parag="Our users choose from more than 1000 Hotels Available ..." img={process.env.PUBLIC_URL + '/img/home1.png'} />
                <br />
                <CarsorWidget />
                <br />
                <HomeWidget title="Many Countries" parag="We have many hotels in many countries To enjoy your vacation in and get new Experience" img={process.env.PUBLIC_URL + '/img/home2.png'} />
            </div>
            <Footer />
        </>
    )
}
