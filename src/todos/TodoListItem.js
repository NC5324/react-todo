import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo }) => {
    return (
        <div className="todo-item-container">
            <h1>{todo.text}</h1>
            <div className="button-container">
                <button className="completed-button">Mark As Completed</button>
                <button className="remove-button">Remove</button>
            </div>
        </div>
    )
}

export default TodoListItem
