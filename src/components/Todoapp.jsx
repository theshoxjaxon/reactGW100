import React from 'react'
import { useState, useEffect } from 'react'
import { set } from 'react-hook-form';

const Todoapp = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);



    const todoHandler = (e) => {
        e.preventDefault();
        const todoInput = e.target[0].value;
        if (todoInput.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: todoInput,
        };
        setTodos([...todos, newTodo]);


    }
    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }


    return (
        <div>
            <h1 className='text-center mb-5 font-extrabold font-sans text-4xl'>Todo App</h1>
            <form className="todo-form flex items-center justify-center" action="#" onSubmit={todoHandler}>
                <input className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Add a new todo..." />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add</button>
            </form>



            <div className="todo-list mt-5 flex flex-col items-center justify-center">
                {loading && <p>Loading...</p>}
                <ul className="w-full max-w-md">
                    <li className="mb-5  p-2 rounded text-gray-700 text-center "> {todos.map((todo) => (
                        <div className="m-2 bg-gray-200 hover:bg-gray-300" key={todo.id} onClick={() => removeTodo(todo.id)}>
                            <span>{todo.text}</span>
                        </div>
                    ))} </li>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setTodos([])}>Clear All</button>

                </ul>
            </div>

        </div>
    )
}
export default Todoapp