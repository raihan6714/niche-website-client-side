import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllBikes = () => {
    const [bikes, setBikes] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch("https://boiling-savannah-74683.herokuapp.com/allBikes")
            .then((res) => res.json())
            .then((data) => setBikes(data));
    }, []);
    console.log(bikes);


    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="border" variant="warning" />
        </div>
    };
    const handleDelete = id => {
        const url = `https://boiling-savannah-74683.herokuapp.com/deletebike/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    const remaining = bikes.filter(bike => bike?._id !== id);
                    setBikes(remaining);
                }
            })
    }
    return (
        <>
            <h1 className="my-3 text-center text-danger">Manage All Bikes</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Images</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Engine</th>
                        <th>Model</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {bikes.map((bike, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{bike?.name}</td>
                            <td>{bike?.image}</td>
                            <td>{bike?.description}</td>
                            <td>{bike?.price} Lakh*</td>
                            <td>{bike?.speed}</td>
                            <td>{bike?.model}</td>
                            <button className="btn btn-warning">Edit</button>
                            <button onClick={() => handleDelete(bike?._id)} className="btn btn-danger">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </>
    );
};

export default ManageAllBikes;