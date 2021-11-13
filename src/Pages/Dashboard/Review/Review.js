import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        fetch("https://boiling-savannah-74683.herokuapp.com/addReview", {
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
            <h1 className="mt-3 text-center text-warning">Add Review</h1>
            <div className="w-50 m-auto mt-2">
                <div className="">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Client Name"
                                type="text"
                                value={user?.displayName}
                                className="p-2 m-2 w-100 input-field"
                            />
                            <select {...register("rateing")} className="p-2 m-2 w-100">
                                <option>Give us Rating Out of 5</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <input
                                {...register("feedback")}
                                placeholder="Your Feedback"
                                className="p-2 m-2 w-100 input-field"
                            />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Add Review"
                                className="btn btn-danger ms-2 w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;