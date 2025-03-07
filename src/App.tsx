import { useState } from '@lynx-js/react'
import './App.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputText, setInputText] = useState('')

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputText.trim(),
        completed: false
      }])
      setInputText('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <view className='container'>
      <view className='header'>
        <text className='title'>Todo App</text>
      </view>
      
      <view className='input-container'>
        <input
          className='todo-input'
          value={inputText}
          placeholder='Add a new todo...'
        />
        <button className='add-button' onClick={addTodo}>
          <text>Add</text>
        </button>
      </view>

      <view className='todo-list'>
        {todos.map(todo => (
          <view key={todo.id} className='todo-item'>
            <view 
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
            >
              <text>{todo.text}</text>
            </view>
            <button 
              className='delete-button'
              onClick={() => deleteTodo(todo.id)}
            >
              <text>Delete</text>
            </button>
          </view>
        ))}
      </view>
    </view>
  )
}