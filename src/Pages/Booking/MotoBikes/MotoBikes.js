import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const MotoBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://boiling-savannah-74683.herokuapp.com/allBikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <Navigation />
            <h2 className="text-center m-2 p-2 text-danger">This Is our Collection</h2>
            <div className="row row-cols-2 row-cols-md-3 g-4 mx-2">
                {
                    bikes.map((bike, index) => (<div className="col">
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
            <Footer />
        </>
    );
};

export default MotoBikes;