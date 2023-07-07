"use client"
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:w-4/6 w-3/4 mx-auto min-h-screen">
                    <div className="">
                        <div className="card shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-3xl text-center font-2xl">Please Confirm your identity!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Age</span>
                                    </label>
                                    <input {...register("age", { required: true })} type="number" placeholder="You Age" className="input input-bordered" />
                                    {errors.age && <span className="text-red-600">Age is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary" value="Login">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;