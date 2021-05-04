import React from 'react'

export const HomeWidget = ({ title, parag, img }) => {
    return (
        <div>
            <div class="row ">
                <div class="col-md">
                    <h2 className="display-4">{title}</h2>
                    <p>{parag}</p>
                </div>
                <div class="col-md">
                    <img src={img} className="rounded mx-auto d-block" style={{ width: "20rem" }} />

                </div>
            </div>
        </div>
    )
}
