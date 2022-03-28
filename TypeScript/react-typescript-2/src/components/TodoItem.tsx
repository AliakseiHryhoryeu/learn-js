import React from 'react'
import { FC } from 'react'
import {ITodo} from '../types'

type TodoItemProps ={
    todo: ITodo
}

const TodoItem:FC<TodoItemProps>=({todo}) =>{
  return (
    <div>
        <input type="checkbox" checked={todo.completed} />
        {todo.id}. {todo.title}

    </div>
  )
}

export default TodoItem
