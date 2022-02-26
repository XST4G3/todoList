import React from 'react'
import Todo from './Todo'

export default function SuccessList({successTodo, deleteTodo}) {
    return (
        <div className='animate__animated card animate__fadeInDown'>
            <div className='card-body'>
                <h4 className="card-title">Выполненные задачи</h4>
                <p className="card-title-desc">Задачи, с которыми Вы расправились!</p>
                {
                    successTodo.length > 0 
                    ?
                    successTodo.map(el => <Todo key={el.id} {...el} success deleteTodo={deleteTodo}/>)
                    :
                    <div>
                        <h6 className="text-center">Список пуст. К сожелению, время летит очень быстро 😢</h6>
                        <h6 className="text-center">Постарайтесь выполнить как можно больше задач</h6>
                    </div>
                }
            </div>
        </div>
    )
}