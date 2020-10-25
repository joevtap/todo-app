import "./App.css";
import React from "react";

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
    return (
        <>
            <div className="container">
                <InputTodo />
                <ListTodos />
            </div>
        </>
    );
}

export default App;
