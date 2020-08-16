import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import shortid from 'shortid';

const App = () => {
    const [todos,setTodos] = useState([
        {write: '就活',id: shortid.generate()},
        {write: '転活',id: shortid.generate()},
        {write: '学習',id: shortid.generate()},
        {write: '寝る',id: shortid.generate()},
    ])
    const addTodos = coment => {
        setTodos([
            ...todos,
            {write:coment,id: shortid.generate()}
        ])
    }
    const Delete = num => {
        setTodos(todos.filter(to => to.id !== num))
        //setTodoした時、一致しなかったものを返す(残す)
        //クリックされたものはtureとなり消える
    }

    return (
        <>
            <h1>今日もTodo</h1>
            <Form formAddTodos = {addTodos} />
            <List listTodos = {todos} deleteTodo = {Delete} />
        </>
    )
}

export default App;