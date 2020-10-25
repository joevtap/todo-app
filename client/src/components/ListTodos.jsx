import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

export default function ListTodos(props) {
    const [todos, setTodos] = useState([]);

    //deleteTodo

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(
                `http://localhost:5000/todos/${id}`,
                {
                    method: "DELETE",
                }
            );

            setTodos(todos.filter((todo) => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <table className="table mt-5 text-center">
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}