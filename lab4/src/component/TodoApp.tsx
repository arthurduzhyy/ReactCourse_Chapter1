import { useEffect, useState } from 'react'
import useGetData from '../hook/useGetData'
import { Todo } from '../type/todo'
import SearchInput from './SearchInput'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [editableTodo, setEditableTodo] = useState<Todo | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { data, loading, error } = useGetData('https://jsonplaceholder.typicode.com/todos?_limit=3')

  useEffect(() => {
    if(data && Array.isArray(data)) {
      setTodos(data)
    }
  }, [data])

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
      setEditableTodo(null)
    } else {
      handleAdd(todo)
    }
  }

  const onEdit = (todo: Todo) => {
    setEditableTodo(todo)
  }

  const filteredTodos = todos.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return <div>
    <div>
      {error && !loading && <p>Error: {error.message}</p>}
    </div>

    <SearchInput query={searchQuery} onSearch={setSearchQuery} />

    <TodoForm onSave={onSave} initialTodo={editableTodo} />

    {loading ? <p>Loading...</p> : <TodoList
      todos={filteredTodos}
      onEdit={onEdit}
      onDelete={handleDelete}
      onToggle={handleToggle}
    />}
  </div>
}

export default TodoApp