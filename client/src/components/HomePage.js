import React from 'react'
import { HomeWidget } from './layout/HomeWidget'

export const HomePage = () => {
    return (
        <div class="container">
            <HomeWidget title="BEST HOTEL SYSTEM" parag="Our users choose from more than 1000 Hotels Available ..." img={process.env.PUBLIC_URL + '/img/home1.png'} />
            <br />
            <HomeWidget title="BEST HOTEL SYSTEM" parag="Our users choose from more than 1000 Hotels Available ..." img={process.env.PUBLIC_URL + '/img/home1.png'} />

        </div>
    )
}
