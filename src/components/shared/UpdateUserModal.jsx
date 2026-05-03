"use client";
import React, { useRef } from "react";
import { FaEdit, FaUser } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const UpdateUserModal = () => {

    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.photo.value;

        await authClient.updateUser({
            name,
            image
        })

        modalRef.current?.close();
    }

    return (
        <>
            <button className="btn btn-success text-white" onClick={openModal}>
                <FaEdit></FaEdit> Update Profile
            </button>

            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <p className="text-green-600 border w-fit p-2 rounded-full"><FaUser></FaUser></p>
                    <h3 className="font-bold text-lg">Update User</h3>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form className="space-y-4 " onSubmit={handleUpdate}>


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input type="text" name="name" className="input w-full" placeholder="Type Your Name" />


                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo URL</legend>
                            <input type="text" name="photo" className="input w-full" placeholder="Type Your Photo URL" />


                        </fieldset>

                        <button type="submit" className="btn btn-success w-full text-white">Save</button>
                    </form>

                </div>
            </dialog>
        </>
    );
};

export default UpdateUserModal;