import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://boiling-savannah-74683.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);
    const handleDelete = id => {
        const url = `https://boiling-savannah-74683.herokuapp.com/deleteOrder/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }
    return (
        <>
            <h2 className="text-danger p-2 text-center">My Booking</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    orders.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.product}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <button onClick={() => handleDelete(order?._id)} className="btn btn-danger">Cancel</button>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
        </>
    );
};

export default MyBooking;