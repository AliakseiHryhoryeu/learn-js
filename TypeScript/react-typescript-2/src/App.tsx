import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import EventExample from './components/EventExample'
import { ITodo, IUser } from './types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=30')
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <EventExample />
      <Card width='200px' height='200px' variant={CardVariant.outlined} >
        sddsh
      </Card >
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />

      
    </div>
  )
}

export default App;
