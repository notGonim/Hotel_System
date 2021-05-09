import React from 'react'
import { Link } from 'react-router-dom'

export const HotelCard = ({ id, key, title, img, desc }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{ fontSize: "15px" }}>{desc}</p>
                <Link to={`/book/${id}`} className="btn btn-primary">Book It</Link>
            </div>
        </div>
    )
}
