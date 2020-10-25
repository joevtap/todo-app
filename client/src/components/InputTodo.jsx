import React, { useState } from "react";

export default function InputTodo(props) {
    const [description, setDescription] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h1 className="text-center mt-5">PERN Todo List</h1>
            <form onSubmit={onSubmit} className="d-flex mt-5">
                <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success ml-2">Add</button>
            </form>
        </>
    );
}
