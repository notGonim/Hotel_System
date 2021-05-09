import React from 'react'
import { Link } from 'react-router-dom'
import { MainHeader } from '../../layout/header'

export const book = () => {
    return (
        <>
            < MainHeader />

            <div class="container  p-3">
                <div class="row">
                    <div class="col">

                        <div class="card mb-3">
                            <img src="https://badianhotel.com/wp-content/uploads/2020/08/baglioni-hotel-london.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Avaliable Rooms : 5 </small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h3 className="mb-5">Num Of Rooms</h3>

                        <div className=" inline">
                            <span className="btn btn-danger minus" >-</span>
                            <input type="number" className="form-control count d-inline" readOnly />
                            <span className="btn btn-primary plus" >+</span>
                        </div>
                        <div className=" mt-5">
                            <Link to="/checked" className="btn btn-outline-primary">Book Now</Link>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
