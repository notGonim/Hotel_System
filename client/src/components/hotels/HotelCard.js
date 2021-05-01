import React from 'react'

export const HotelCard = () => {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src="https://badianhotel.com/wp-content/uploads/2020/08/baglioni-hotel-london.jpg" alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text" style={{ fontSize: "15px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="" class="btn btn-primary">Book It</a>
            </div>
        </div>
    )
}
