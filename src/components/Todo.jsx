import React from 'react'
import {BADGES} from '../constants'

export default function Todo({title, body, badge = 'primary', ...props}) {
    return (
        <div className='animate__animated row align-items-center mb-4 animate__fadeInUp'>
            <div className='col-10' style={{textDecoration: props.success ? 'line-through':'none'}}>
                <h6>{ BADGES[badge] } {title}</h6>
                <p className='m-0' style={{whiteSpace: 'pre-wrap'}}>{body}</p>
            </div>
            <div className='col-2 text-center'>
                <button className='btn' onClick={() => props.deleteTodo(props.id, props.success)}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 25}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {!props.success && <button className='btn' onClick={() => props.insertSuccessTodo(props.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 25}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </button>}
            </div>
        </div>
    )
}