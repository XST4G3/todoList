import React from 'react'
import { useState } from 'react'
import {BADGES} from '../constants'

export default function AddTodo({insertTodo}) {
    const [formData, setFormData] = useState({title: '', body: '', badge: 'default'})

    function onChange(type, value) {
        setFormData({...formData, [type]: value})
    }

    function sendTodo() {
        if(formData.title && formData.body)
        {
            insertTodo(formData)
            setFormData({title: '', body: '', badge: 'default'})
        }
    }

    return (
        <div className='animate__animated card animate__fadeInRight'>
            <div className='card-body'>
                <h4 className="card-title">Добавить задачу</h4>
                <p className="card-title-desc">Вы можете установить заголовок и описание задачи</p>
                <div className="mb-3">
                    <label className="form-label">Заголовок</label>
                    <input className="form-control" value={formData.title} onChange={e => onChange(e.target.name, e.target.value)} name="title" type="text" placeholder="Например: Магазин"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Описание</label>
                    <textarea value={formData.body} onChange={e => onChange(e.target.name, e.target.value)} name="body" rows="4" className="form-control" placeholder="Например: Купить продукты"></textarea>
                </div>
                <div className="mb-4">
                    <label className="form-label">Префикс</label>
                    <select className="form-select" value={formData.badge} name="badge" onChange={e => onChange(e.target.name, e.target.value)}>
                        <option disabled value="default">Выберите префикс</option>
                        {
                            Object.keys(BADGES).map(el => <option key={el}>{el}</option>)
                        }
                    </select>
                </div>
                <button type="button" className="btn btn-primary float-end" onClick={sendTodo}>Добавить</button>
            </div>
        </div>
    )
}