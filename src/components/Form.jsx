"use client"

import { useForm } from "react-hook-form";
import InfoTable from './InfoTable';
import { useEffect, useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import Loader from "./Loader";
import Swal from "sweetalert2";

const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async data => {
        setLoading(true)
        try {
            const res = await fetch('api/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const users = await res.json();
            console.log(users)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User succesfully added in collection',
                showConfirmButton: false,
                timer: 1500
              })
            reset()
        }
        catch (err) {
            console.log(err.message)
        }
        finally {
            setLoading(false)
        }
    };

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [loading])

    

    console.log(users);

    return (
        <div className="lg:flex lg:px-10 justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:w-2/3 mx-auto pt-8">
                    <div className="">
                        <div className="card shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-3xl text-center font-2xl">Please fill up Required Information!</h1>
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
                                    <button disabled={loading} type="submit" className="btn btn-primary">
                                        {loading ? <TbFidgetSpinner className='animate-spin' size={24} /> : "Add to collection"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="lg:w-2/4 mx-auto mt-8 border-2 border-black rounded-lg">
                <table className="table table-zebra">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    {
                        users.length > 0 ? users?.map((user, index) => <InfoTable key={index} user={user}></InfoTable>
                        ) : <tr><Loader /></tr>
                    }
                </table>
            </div>
        </div>
    );
};

export default Form;