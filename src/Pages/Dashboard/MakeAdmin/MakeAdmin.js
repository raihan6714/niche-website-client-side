import React from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        reset();
    };
    return (
        <div>
            <h1>make admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    style={{ width: '50%', padding: "5px" }}
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="make as Admin"
                />
            </form>
        </div>
    );
};

export default MakeAdmin;
