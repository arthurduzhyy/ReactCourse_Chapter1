import { FC, ReactNode, useState } from 'react'
import { TodoContext, TodoType } from '../hook/useTodo'

interface TodoProviderProps {
  children: ReactNode
}

const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [search, setSearch] = useState<string>('')

  const addTodo = (todo: TodoType) => {
    setTodos(prev => [todo, ...prev])
  }

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const updateTodo = (id: number, title: string) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, title: title } : t)))
  }

  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  const value = { todos, setTodos, addTodo, deleteTodo, updateTodo, toggleTodo, search, setSearch }

  return <TodoContext.Provider value={value}>
    {children}
  </TodoContext.Provider>
}

export default TodoProvider