import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Services = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    const AllBikes = bikes.slice(0, 6);
    return (
        <>
            <div className="row row-cols-2 row-cols-md-3 g-4 mx-2">
                {
                    AllBikes.map((bike, indexe) => (<div className="col">
                        <div className="card h-80">
                            <img src={bike.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{bike?.name}</h2>
                                <h3 className="card-title">{bike?.model}</h3>
                                <h4 className="card-title">{bike?.price} Lakh*</h4>
                                <h4 className="card-title">{bike?.speed}</h4>
                                <p className="card-text">{bike?.description.slice(0, 150)}</p>
                                <Link to={`/services/${bike._id}`}>
                                    <button className="btn btn-danger">View Finance Offers</button>
                                </Link>

                            </div>
                        </div>
                    </div>))
                }
            </div>
        </>
    );
};

export default Services;