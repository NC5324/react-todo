import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button, Input } from './ui-components'
import { addTodoRequest } from './thunks'
import { getTodos } from './selectors'


const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  padding: 10px;
  margin: 10px;

  background-color: #313131;
`

const NewTodoInput = styled(Input)`
  flex: 1 1 auto;
`


const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <FormContainer>
            <NewTodoInput
                type="text"
                placeholder="Type your new TODO here"
                className={"new-todo-input"}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <Button
                onClick={() => {
                    const isEmptyOrDuplicateText = !inputValue || todos.some(todo => todo.text ===  inputValue)
                    if(!isEmptyOrDuplicateText) {
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }
                }}
                className="new-todo-button">
                Create Todo
            </Button>
        </FormContainer>
    )
}

const mapStateToProps = state => ({
    todos: getTodos(state)
})

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
