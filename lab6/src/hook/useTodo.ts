import { useContext, createContext, Dispatch, SetStateAction } from 'react'

interface TodoContextType {
  todos: TodoType[]
  setTodos: Dispatch<SetStateAction<TodoType[]>>
  addTodo: (todo: TodoType) => void
  deleteTodo: (id: number) => void
  updateTodo: (id: number, title: string) => void
  toggleTodo: (id: number) => void
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export interface TodoType {
  id: number
  title: string
  completed: boolean
}

export const TodoContext = createContext<TodoContextType>(null!)

export default () => useContext(TodoContext)