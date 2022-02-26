import React from 'react'
import Todo from './Todo'

export default function List({todos, insertSuccessTodo, deleteTodo}) {
    return (
        <div className='animate__animated card animate__fadeInUp'>
            <div className='card-body'>
                <h4 className="card-title">Список задач</h4>
                <p className="card-title-desc">Задачи, которые необходимо выполнить</p>
                
                {todos.length > 0
                ?
                todos.map(el => <Todo key={el.id} id={el.id} deleteTodo={deleteTodo} insertSuccessTodo={insertSuccessTodo} title={el.title} body={el.body} badge={el.badge}/>)
                :
                <h6 className="text-center">Список задач пуст 🙀</h6>
                }
            </div>
        </div>
    )
}