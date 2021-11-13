import React, { useEffect, useState } from 'react';
import './Bike.css';
import Navigation from '../../Shared/Navigation/Navigation';
import Accordion from 'react-bootstrap/Accordion'
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';


const Bike = () => {
    const [bike, setBike] = useState({});
    const { user } = useAuth();
    const { bikeId } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch("https://boiling-savannah-74683.herokuapp.com/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        reset();
    };

    //get single bike in database
    useEffect(() => {
        fetch(`https://boiling-savannah-74683.herokuapp.com/singleBike/${bikeId}`)
            .then((res) => res.json())
            .then((data) => setBike(data));
    }, [bikeId]);
    return (
        <>
            <Navigation />
            <div className="container bg-gray">
                <h2 style={{ color: "orange" }} className="text-center m-4 fw-bold">ABOUT THIS BIKE</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Card className="bg-dark text-white">
                            <Card.Img src={bike?.image} alt="Card image" />
                            <Card.Body>
                                <Card.Text>
                                    {bike?.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 booking-form">
                        <Row xs={1} md={1} className="g-4 mb-4">
                            {Array.from({ length: 1 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>NAME: {bike?.name}</Card.Title>
                                            <Card.Title>PRICE: {bike?.price} Lakh*</Card.Title>
                                            <Card.Title>MODEL: {bike?.model}</Card.Title>
                                            <Card.Title>Engine: {bike?.speed}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <h4 style={{ color: "orange" }} className="text-center text-gray m-2 fw-bold">BOOKING NOW</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                defaultValue={user?.displayName}
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input

                                {...register("product")}
                                placeholder="Product"
                                value={bike?.name}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("email")}
                                placeholder="Email"
                                defaultValue={user?.email}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("address")}
                                placeholder="Address"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("phone", { required: true })}
                                placeholder="phone"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <select {...register("model")} className="p-2 m-2 w-100">
                                <option value="singleDisk">single disk</option>
                                <option value="daboulDisk">daboul disk</option>
                            </select>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Order now"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
                <div className="row my-4">
                    <h4 className="text-center text-gray m-2 fw-bold">Some Feture</h4>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is the exact on-road price price of KTM 250 Duke?</Accordion.Header>
                            <Accordion.Body>The on-road price of KTM 250 Duke in Delhi starts at Rs. 2,57,918. The on-road price is inclusive of RTO charges and insurance.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Which bikes is better KTM 250 Duke or BMW G 310 R?</Accordion.Header>
                            <Accordion.Body>
                                KTM 250 Duke price starts at Rs 2,28,736 ex-showroom and BMW G 310 R price starts Rs 2.92 Lakh ex-showroom. Yamaha FZ 25, KTM 200 Duke on the basis of their price, features & specs.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What are different variants for KTM 250 Duke?</Accordion.Header>
                            <Accordion.Body>
                                The different variants of KTM 250 Duke are KTM 250 Duke BS6..
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is the engine displacement of KTM 250 Duke?</Accordion.Header>
                            <Accordion.Body>
                                The engine displacement of KTM 250 Duke is 248.8 cc
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is the Start type of this bike?</Accordion.Header>
                            <Accordion.Body>
                                KTM 250 Duke has Self Start Only
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Bike;