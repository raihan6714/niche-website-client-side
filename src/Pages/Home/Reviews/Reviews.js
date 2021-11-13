import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <h2 className="text-center text-danger m-2 p-2">Our Clients Feedbacks</h2>
            {
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        reviews.map(review => (
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            <span className="text-danger">CLIENT NAME: </span>{review?.name}
                                        </Card.Title>
                                        <Card.Title>
                                            <span className="text-danger">GIVE US: </span>
                                            {review?.rateing} Out Of 5
                                        </Card.Title>
                                        <Card.Text>
                                            <span className="text-danger">CLIENT SAY : </span>
                                            {review?.feedback}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ))}
                </Row>
            }
        </Container>

    );
};

export default Reviews;
