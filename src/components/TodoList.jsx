import React, { useEffect } from 'react'
import { useState } from 'react'
import AddTodo from './AddTodo'
import List from './List'
import SuccessList from './SuccessList'

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, title: 'What is Lorem Ipsum?', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', badge: 'primary'},
        {id: 2, title: 'Why do we use it?', body: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', badge: 'warning'},
        {id: 3, title: 'Where can I get some?', body: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.', badge: 'danger'},
    ])

    const [successTodo, setSuccessTodo] = useState([])

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'))
        const successTodos = JSON.parse(localStorage.getItem('successTodos'))

        setTodos(todos)
        setSuccessTodo(successTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        localStorage.setItem('successTodos', JSON.stringify(successTodo))
    }, [todos, successTodo])

    function insertTodo(value) {
        setTodos([{id: Date.now(), ...value}, ...todos])
    }

    function insertSuccessTodo(id) {
        setTodos(todos.filter(el => el.id !== id))
        setSuccessTodo([...todos.filter(el => el.id === id), ...successTodo])
    }

    function deleteTodo(id, isSuccessTodo) {
        if(isSuccessTodo)
            setSuccessTodo(successTodo.filter(el => el.id !== id))
        else
            setTodos(todos.filter(el => el.id !== id))
    }

    return (
        <div className='row justify-content-end animate__animated animate__fadeIn'>
            <div className='col-lg-4'>
                <AddTodo insertTodo={insertTodo}/>
            </div>
            <div className='col-lg-8'>
                <List todos={todos} deleteTodo={deleteTodo} insertSuccessTodo={insertSuccessTodo}/>
                <SuccessList successTodo={successTodo} deleteTodo={deleteTodo}/>
            </div>
        </div>
    )
}