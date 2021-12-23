import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
 height: 50px;    
 width: 80%; 
 border-radius: 12px; 
 background-color: white; 
 display: flex; 
 justify-content: center; 
 align-items: center;
`
const InputBox = styled.input`
 background: none; 
 border: none; 
 margin-left: 12px; 
 flex:1;
 outline: none;
 
`

const Button = styled.button`
 margin-right: 8px; 
 background-color: rgb(214, 213, 213);
 border:none; 
 border-radius: 10px; 
 height: 30px; 
 width: 50px;
`

const Input = () => {
    const [input, setInput] = useState('')

    const addTodo = () => {

    }

    return (
        <Container>
            <InputBox type="text" value={input} onChange={e => setInput(e.target.value)} />
            <Button onClick={addTodo}>Add</Button>
        </Container>
    )
}

export default Input
