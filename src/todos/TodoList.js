import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks'
import {
    getCompletedTodos,
    getIncompleteTodos,
    getTodosLoading, } from './selectors'

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ListHeader = styled.h1`
  font-family: Arial, Helvetica, sans-serif;

  color: white;
  opacity: 0.87;
  padding: 10px 10px 0;
`

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, [])

    const loadingMessage = (
        <div style={{
            color: 'white' }}>
            Loading TODOS...
        </div>
    )
    const content = (
        <>
            <ListWrapper>
                <NewTodoForm />
                <ListHeader>Incomplete TODOs:</ListHeader>
                {incompleteTodos.map(todo => <TodoListItem todo={todo}
                                                 onRemovePressed={onRemovePressed}
                                                 onCompletePressed={
                                                     onCompletePressed
                                                 }
                                                 key={todo.text} />)}
            </ListWrapper>
            <ListWrapper>
                <ListHeader>Completed TODOs:</ListHeader>
                {completedTodos.map(todo => <TodoListItem todo={todo}
                                                 onRemovePressed={onRemovePressed}
                                                 key={todo.text} />)}
            </ListWrapper>
        </>
    )

    return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state)
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
    onCompletePressed: (id) => dispatch(updateTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
