import {
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure,
    createTodo,
    removeTodo,
    updateTodo
} from './actions'

export const loadTodos = () => async(dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress())
        const response = await fetch(`http://localhost:8080/todos`)
        const todos = await response.json()

        dispatch(loadTodosSuccess(todos))
    } catch(err) {
        dispatch(loadTodosFailure())
        dispatch(displayAlert(err))
    }
}

export const addTodoRequest = (text) => async(dispatch) => {
    try {
        const response = await fetch('http://localhost:8080/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        })
        const createdTodo = await response.json()
        dispatch(createTodo(createdTodo))
    } catch(err) {
        dispatch(displayAlert(err))
    }
}


export const updateTodoRequest = (id) => async(dispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const updatedTodo = await response.json()
        dispatch(updateTodo(updatedTodo))
    } catch(err) {
        dispatch(displayAlert(err))
    }
}

export const removeTodoRequest = (id) => async(dispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const deletedTodo = await response.json()
        dispatch(removeTodo(deletedTodo))
    } catch(err) {
        dispatch(displayAlert(err))
    }
}

export const displayAlert = (text) => () => {
    alert(text)
}
