import { useState } from 'react'
import useTodos from '../hook/useTodos'
import { Todo } from '../type/todo'
import SearchInput from './SearchInput'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  const [todos, setTodos] = useTodos()
  const [editableTodo, setEditableTodo] = useState<Todo | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleAdd = (todo: Todo) => {
    setTodos(prev => [todo, ...prev])
  }

  const handleEdit = (todo: Todo) => {
    setTodos(prev => prev.map(t => t.id === todo.id ? todo : t))
  }

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const handleToggle = (id: number) => {
    setTodos(prev => prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const onSave = (todo: Todo) => {
    if (editableTodo) {
      handleEdit(todo)
      setEditableTodo(undefined)
    } else {
      handleAdd(todo)
    }
  }

  const onEdit = (todo: Todo) => {
    setEditableTodo(todo)
  }

  const filteredTodos = todos.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return <div>
    <SearchInput query={searchQuery} onSearch={setSearchQuery} />

    <TodoForm onSave={onSave} initialTodo={editableTodo} />

    <TodoList
      todos={filteredTodos}
      onEdit={onEdit}
      onDelete={handleDelete}
      onToggle={handleToggle}
    />
  </div>
}

export default TodoApp