import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddBike = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        fetch("https://boiling-savannah-74683.herokuapp.com/addBike", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        reset();
    };
    return (
        <div>
            <h1 className="mt-3 text-center text-danger">Add MotoBike</h1>
            <div className="w-50 m-auto mt-2">
                <div className="">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="any"
                                className="p-2 m-2 w-100 input-field"
                            />
                            <input
                                {...register("speed", { required: true })}
                                placeholder="Speed"
                                type="any"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <select {...register("model")} className="p-2 m-2 w-100">
                                <option value="single disk">single disk</option>
                                <option value="daboul disk">daboul disk</option>
                            </select>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Add Moto Bike"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBike;
