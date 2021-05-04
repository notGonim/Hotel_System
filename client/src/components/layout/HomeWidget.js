import React from 'react'

export const HomeWidget = ({ title, parag, img }) => {
    return (
        <div>
            <div class="row m-5">
                <div class="col-sm">
                    <h2 className="display-4">{title}</h2>
                    <p>{parag}</p>
                </div>
                <div class="col-sm">
                    <img src={img} className="rounded mx-auto d-block" style={{ width: "20rem" }} />

                </div>
            </div>
        </div>
    )
}
