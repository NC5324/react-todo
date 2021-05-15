import React from 'react'
import styled from 'styled-components'
import { Button } from './ui-components'

const TodoItem = styled.div`
  padding: 10px;
  margin: 0 10px 10px;

  background-color: #313131;
  border-radius: 20px;`

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
    return (
        <TodoItem>
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
        </TodoItem>
    )
}

export default TodoListItem
