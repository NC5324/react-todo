import React from 'react'
import styled from 'styled-components'
import { Button } from './ui-components'

const DefaultTodoItem = styled.div`
  padding: 10px;
  margin: 0 10px 10px;

  background-color: #313131;
  border-radius: 20px;
`

export const getBorderStyle = (currentDate, startingDate) => {
    return  currentDate < new Date(startingDate - 3600000*3) ? 'none' : '2px solid red'
}

const UrgentTodoItem = styled(DefaultTodoItem)`
  border-bottom: ${props => getBorderStyle(new Date(props.createdAt), Date.now())}
`

const TodoText = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  
  color: white;
  opacity: 0.87;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const TodoItemButton = styled(Button)`
  flex: 0 1 200px;
`

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => {
    const TodoItem = todo.isCompleted ? DefaultTodoItem : UrgentTodoItem
    return (
        <TodoItem createdAt={todo.createdAt}>
            <TodoText>{todo.text}</TodoText>
            <ButtonsContainer>
                {todo.isCompleted ? null :
                    <TodoItemButton
                            onClick={() => {
                                onCompletePressed(todo.id)
                            }}>
                        Mark As Completed
                    </TodoItemButton>
                }
                <TodoItemButton
                    onClick={() => {
                        onRemovePressed(todo.id)
                    }}>
                    Remove
                </TodoItemButton>
            </ButtonsContainer>
            <p style={{color: 'white', textAlign: 'center'}}>Created at:&nbsp;
                {(new Date(todo.createdAt)).toLocaleTimeString()}
            </p>
        </TodoItem>
    )
}

export default TodoListItem
