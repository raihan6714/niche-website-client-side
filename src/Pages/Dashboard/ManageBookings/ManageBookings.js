import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ManageBookings = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const { isLoading } = useAuth();
    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    console.log(orders);

    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };


    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="border" variant="warning" />
        </div>
    };
    const handleDelete = id => {
        const url = `http://localhost:5000/deleteOrder/${id}`;
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
            <h1 className="my-3 text-center text-danger">Manage All Orders</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.address}</td>
                            <td>{order?.phone}</td>
                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(order?._id)}
                                        {...register("status")}
                                    >
                                        <option value={order?.status}>{order?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input type="submit" />
                                </form>
                            </td>
                            <button onClick={() => handleDelete(order?._id)} className="btn btn-danger">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </>
    );
};

export default ManageBookings;