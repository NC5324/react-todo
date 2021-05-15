import styled from 'styled-components'

export const Button = styled.button`
  --color: rgba(255, 255, 255, 0.66);
  color: var(--color);
  font-weight: bold;

  padding: 10px;
  margin: 5px;

  background-color: transparent;
  border: 1px solid var(--color);
  border-radius: 5px;

  outline: none;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.66);
    color: white;
  }
`

export const Input = styled.input`
  overflow: hidden;
  text-overflow: ellipsis;

  color: #222222;

  padding: 10px;
  margin: 5px;

  outline: none;
  border-radius: 5px;
  border: 1px solid #313131;
`
